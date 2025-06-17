import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

export async function POST(request) {
    try {
        const prisma = new PrismaClient();
        const payload = await request.json();
        // let data = await prisma.Employee.create({
        //     data:payload
        // })
        // let data = await prisma.Employee.create({
        //     data: {
        //         name: payload['name'],
        //         designation: payload['designation'],
        //         city: payload['city'],
        //         salary: payload['salary']
        //     }
        // })

        let data = await prisma.Employee.createMany({
            data: [
                {name: "Ayesha", designation: "Student", city: "Dhaka", salary: 0},
                {name: "Ayesha", designation: "Student", city: "Dhaka", salary: 0}
            ]
        })

        return NextResponse.json({status: "success", data: data})
    } catch (error) {
        return NextResponse.json({status: "fail", data:error})
    }
}