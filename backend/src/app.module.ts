import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CarsModule } from './modules/cars/cars.module';

@Module({
  imports: [UsersModule, AuthModule, CarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
