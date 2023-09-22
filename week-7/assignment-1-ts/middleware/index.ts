import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
const SECRET = 'SECr3t';  // This should be in an environment variable in a real application

interface UserToken {
  id: string
}

const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.headers.userId = (user as UserToken).id;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export {
    authenticateJwt,
    SECRET
}
