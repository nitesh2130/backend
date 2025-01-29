import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { LoginUserDto } from './login-user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {} // Correctly inject UserService

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  @Post('/login')
  async login(@Body() LoginUserDto: LoginUserDto) {
    return this.userService.loginUser(LoginUserDto);
  }
}
