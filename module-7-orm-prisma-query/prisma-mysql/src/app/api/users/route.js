import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

export async function POST(request) {
    try {
        const prisma = new PrismaClient();
        const payload = await request.json();

        let userData = await prisma.User.create({
            data: {
                name: payload['name'],
                email: payload['email'],
                password: payload['password'],
                role: payload['role'],
                active: true
            }
        })

        let profileData = await prisma.Profile.create({
            data: {
                firstName: payload['firstName'],
                lastName: payload['lastName'],
                mobile: payload['mobile'],
                city: payload['city'],
                userID: userData.id
            }
        })

        return NextResponse.json({status: "success", data: userData})
    } catch (error) {
        return NextResponse.json({status: "fail", data:error})
    }
}