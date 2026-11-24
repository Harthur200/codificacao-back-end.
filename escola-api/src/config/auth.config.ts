import { registerAs } from "@nestjs/config";

export default registerAs ('auth', () => ({
    JWTSecret: process.env.JWT_SECRET || 'chave_secreta_padrao',
    JwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d',
}));