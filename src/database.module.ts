import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Nitesh@7877',
      database: 'Pizza',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class DataBaseModule {}
