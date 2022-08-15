import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default (request: Request, response: Response, next: NextFunction) => {
    const header =  request.headers.authorization;
    const secret: Secret = String(process.env.PRIVATE_TOKEN);

    if (!header) {
        return response.status(401).json({
            mensagem: 'Usuário não autenticado'
        });
    }

    const [, token] = header.split(' ');

    try {
        const payload = jwt.verify(token, secret);
        console.log(payload);

        next();
    } catch (error) {
        return response.status(401).json({
            mensagem: 'Usuário não autenticado'
        });
    }
}