import { Module } from '@nestjs/common';
import { User } from './user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { UserService } from './user.service';
//import { User } from './user.model';
import { JwtService } from '@nestjs/jwt';
@Module({
    imports: [SequelizeModule.forFeature([User])],
    providers: [UserService,JwtService],
    controllers: [UserController],
})
export class UserModule {}
