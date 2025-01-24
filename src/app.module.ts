import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseService } from './database.service'; // Import the service
import { DataBaseModule } from './database.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [DataBaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService], // Add the DatabaseService
})
export class AppModule {}
