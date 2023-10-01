import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '271517689593-926segea42da3ni7un5elp02s45f0st9.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:5500/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    acessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile;

    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      acessToken,
    };
    done(null, user);
  }
}
