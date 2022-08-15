import { Request, Response } from 'express';
import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import UserService from '../services/user';
import dotenv from 'dotenv';

dotenv.config();

export default class AuthController {
    login = async (request: Request, response: Response) => {
        const { email, password } = request.body;
        const service = new UserService();
        const user = await service.findByEmail(email);
        console.log('User', user, email, password);
        

        if (!user || !user.comparePassword(password)) {
            return response.status(400).json({
                mensagem: 'Usuário ou senha inválido'
            });
        }

        const secret: Secret = String(process.env.PRIVATE_TOKEN);
        const options: SignOptions = {
            expiresIn: process.env.EXPIRE_TOKEN
        }

        const token = jwt.sign(
            { 
                id: user.id,
                email: user.email 
            }, 
            secret,
            options
        );

        return response.json({
            user: { 
                id: user.id,
                name: user.name,
                email: user.email
            },
            token,
        });
    }
}