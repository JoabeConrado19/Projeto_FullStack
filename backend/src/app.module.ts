import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { CarsModule } from './modules/cars/cars.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, AuthModule, CarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
