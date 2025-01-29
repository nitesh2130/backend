import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pizza_password',
      database: 'pizza_db',
      autoLoadModels: true,
      synchronize: false,
    }),
  ],
})
export class DataBaseModule {}
