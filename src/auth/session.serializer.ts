import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }
  serializeUser(user: any, done: (e: Error, email: string) => void) {
    console.log('=== SerializeUser ===');
    done(null, user.email);
  }
  async deserializeUser(email: string, done: (e: Error, user: any) => void) {
    // 1 access に対して 複数回 call...(対策)
    console.log('=== DeserializeUser ===');
    const user = await this.authService.deserializer(email);
    done(null, user);
  }
}
