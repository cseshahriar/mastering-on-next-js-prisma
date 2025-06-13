import { NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";

const JWT_KEY = process.env.JWT_KEY || "aBCDEfGhIJkLmNoPQRsTuVwXyZ0123456789+/="; // Fallback for demonstration, use a strong, unique key in production!
const key = new TextEncoder().encode(JWT_KEY);

export async function createToken(payload) {
  const key = new TextEncoder().encode(JWT_KEY);
  let token = await new SignJWT(payload)
    .setProtectedHeader({alg:'HS256'})
    .setIssuedAt()
    .setIssuer("http://localhost:3000")
    .setExpirationTime('2h')
    .sign(key);
  return token;
}

export async function POST(req, res) {
    const jsonBody = await req.json();
    let username = jsonBody['username'];
    let password = jsonBody['password'];

    // database check
    if(username === 'ABC' && password==='123') {
      const payload = {username : username}
      const token = await createToken(payload);
      return NextResponse.json({
          token: token,
          message: "Login Success"
      }, {status: 200})
    } else {
        return NextResponse.json(
            {
                status:"fail",
                message: "Invalid User"
            }, {status: 401}
        )
    }
}