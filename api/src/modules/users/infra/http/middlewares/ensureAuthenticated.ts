import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token inválido.', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    /** decoded as TokenPayload - força o tipo da variável decoded */
    const { sub } = decoded as ITokenPayload;

    /** Observação em /src/@types/express.d.ts
     * Foi adicionado um novo parâmetro à biblioteca, assim pode-se incluir a informação de
     * "id" do usuário dentro do request. A rota que utilizar este middleware terá essa
     * informação junto ao corpo da requisição.
     */
    request.user = { id: sub };

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT Token.', 401);
  }
}
