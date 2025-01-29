import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './create-user.dto';
import { LoginUserDto } from './login-user.dto';
import { error } from 'console';
import { notEquals } from 'class-validator';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, phoneNumber, password } = createUserDto;

    if (!name || !email || !phoneNumber || !password) {
      throw new NotFoundException(`User not found`);
    }

    const existingUser = await this.userModel.findOne({
      where: { email: email },
    });
    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await this.userModel.create({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    } as User);

    console.log(`this user from user service ${newUser}`);
    return newUser;
  }

  //login for the user
  async loginUser(
    loginUserDto: LoginUserDto,
  ): Promise<{ access_token: string; user: User }> {
    const { email, password } = loginUserDto;

    //checking email and password is geting or not
    if (!email || !password) {
      throw new ConflictException('Email and Password are required');
    }

    //checking email is exist or not in the Database
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new NotFoundException('email not found');
    }

    const passwordMatch = bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new BadRequestException('Password is not match');
    }

    const ACCESS_TOKEN_EXPIRE = process.env.ACCESS_TOKEN_EXPIRE || '1h';
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
    if (!ACCESS_TOKEN_SECRET) {
      throw new NotFoundException('Access token not found');
    }
    const accessToken = await this.jwtService.signAsync(
      { email: user.email, userId: user.id },
      {
        secret: ACCESS_TOKEN_SECRET,
        expiresIn: ACCESS_TOKEN_EXPIRE,
      },
    );
    return { access_token: accessToken, user };
  }
}
