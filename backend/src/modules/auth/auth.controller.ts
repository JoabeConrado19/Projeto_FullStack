import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

interface IUserLogin {
  email: string;
  password: string;
}

@Controller('login')
@ApiTags('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: IUserLogin) {
    return this.authService.login(user.email);
  }
}
