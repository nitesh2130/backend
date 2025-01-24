import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseService } from './database.service'; // Import the service
import { DataBaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { PizzaController } from './pizza/pizza.controller';
import { PizzaService } from './pizza/pizza.service';
import { PizzaModule } from './pizza/pizza.module';
@Module({
  imports: [DataBaseModule, UserModule, PizzaModule],
  controllers: [AppController, PizzaController],
  providers: [AppService, DatabaseService, PizzaService], // Add the DatabaseService
})
export class AppModule {}
