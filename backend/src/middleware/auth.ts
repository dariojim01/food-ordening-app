import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE || 'http://localhost:3000',
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || 'http://localhost:3000',
    tokenSigningAlg: 'RS256'
  });