// JWTHelper.js
import { NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";


const JWT_KEY = process.env.JWT_KEY || "aBCDEfGhIJkLmNoPQRsTuVwXyZ0123456789+/="; // Fallback for demonstration, use a strong, unique key in production!
const key = new TextEncoder().encode(JWT_KEY);

// create token encryption
export async function CreateToken() {
  const key = new TextEncoder().encode(JWT_KEY);
  const payload = {email : "abc@abc.com", user_id: "abc123"}
  let token = await new SignJWT(payload)
    .setProtectedHeader({alg:'HS256'})
    .setIssuedAt()
    .setIssuer("http://localhost:3000")
    .setExpirationTime('2h')
    .sign(key);
  return token;
}

export async function DecodeToken(token) {
  try {
    const { payload } = await jwtVerify(token, key, {
      issuer: "http://localhost:3000", // Must match the issuer used during signing
      algorithms: ['HS256'] // Must match the algorithm used during signing
    });
    return payload;
  } catch (error) {
    // Handle specific JOSE errors (e.g., JWTExpired, JWTInvalid)
    if (error.code === 'ERR_JWT_EXPIRED') {
      throw new Error("Token expired");
    } else if (error.code === 'ERR_JWS_INVALID') {
      throw new Error("Invalid token signature");
    } else {
      throw new Error(`Token verification failed: ${error.message}`);
    }
  }
}

// get token api
// export async function GET(req, res) {
//     // encode
//     const token = await CreateToken();
//     return NextResponse.json({'token': token})
// }

// get token api
export async function GET(req, res) {
    // encode
    const token = await CreateToken();
    if (!token) {
        return NextResponse.json({ error: "No token provided" }, { status: 400 });
    }
    const decodedPayload = await DecodeToken(token);
    return NextResponse.json({ decoded: decodedPayload });
}
