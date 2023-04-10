import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { AddressModule } from './modules/address/address.module';

@Module({
  imports: [UsersModule, AuthModule, AddressModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
