import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret: '12345sdfertvbj',
};

export const expiresIn = '120s';

export const IS_PUBLIC_KEY = 'SkipAuth';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
