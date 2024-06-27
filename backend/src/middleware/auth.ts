import { NextFunction, Request, Response } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";
import User from "../models/user";

declare global {
  namespace Express {
    interface Request {
      userId: string;
      auth0Id: string;
    }

  }
}

export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE || 'http://localhost:3000',
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || 'http://localhost:3000',
    tokenSigningAlg: 'RS256'
  });

export const jwtParse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { autorization } = req.headers;
  if(!autorization || !autorization.startsWith("Bearer ")){
    return res.status(401).json({
      message: "Invalid token"
    })
  }
  const token = autorization.split("Bearer ")[1];

  try {
    const decoded = jwt.decode(token) as jwt.JwtPayload;
    const auth0Id = decoded.sub;

    const user = await User.findOne({ auth0Id });
    if(!user){
      return res.sendStatus(401);
    }
    req.auth0Id = auth0Id as string;
    req.userId = user._id.toString();
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
}