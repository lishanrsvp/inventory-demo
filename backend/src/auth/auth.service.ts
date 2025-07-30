import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(email: string, password: string) {
    if (
      email === process.env.DUMMY_USER_EMAIL &&
      password === process.env.DUMMY_USER_PASSWORD
    ) {
      return { token: 'dummytoken123' };
    }
    throw new UnauthorizedException('Invalid login');
  }
}
