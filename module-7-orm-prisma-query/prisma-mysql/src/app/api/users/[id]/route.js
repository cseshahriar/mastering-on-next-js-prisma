import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

// detail
export async function GET(request, { params }) {
    try {
        const prisma = new PrismaClient();
        const { id } = params; // Get the user ID from the URL parameters


        const user = await prisma.User.findUnique({ // findFirst
            where: {
                // name: {contains:"Prisma"},
                id: parseInt(id), // Convert the ID to an integer as IDs are typically numbers
            },
            include: {
                profile: true, // Include the related profile data
                post: true,    // Include the related post data
            },
        });

        if (!user) {
            return NextResponse.json({ status: "fail", data: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ status: "success", data: user });
    } catch (error) {
        return NextResponse.json({ status: "fail", data: error.message });
    }
}


export async function PATCH(request, context) {
    const { params } = context;
    const id = parseInt(params.id);
    const prisma = new PrismaClient();
    const payload = await request.json();

    try {
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                name: payload.name,
                password: payload.password,
                profile: {
                    update: {
                        firstName: payload.profile.firstName,
                        lastName: payload.profile.lastName,
                        mobile: payload.profile.mobile,
                        city: payload.profile.city
                    }
                }
            },
            include: {
                profile: true
            }
        });

        return NextResponse.json({ status: "success", data: updatedUser });
    } catch (error) {
        if (error.code === 'P2025') {
            return NextResponse.json(
                { status: "fail", data: "User or profile not found for update" },
                { status: 404 }
            );
        }
        console.error("PATCH error:", error);
        return NextResponse.json({ status: "fail", data: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}



// delete user
export async function DELETE(request, { params }) {
    try {
        const prisma = new PrismaClient();
        const { id } = params;

        await prisma.comment.deleteMany({ where: { userID: parseInt(id) } });
        await prisma.post.deleteMany({ where: { userID: parseInt(id) } });
        await prisma.profile.deleteMany({ where: { userID: parseInt(id) } });

        const deletedUser = await prisma.User.delete({
            where: {
                id: parseInt(id),
            },
            include: { // Include to return the deleted data
                profile: true,
                post: true,
            }
        });

        return NextResponse.json({ status: "success", data: deletedUser });
    } catch (error) {
        if (error.code === 'P2025') {
            return NextResponse.json({ status: "fail", data: "User not found for deletion" }, { status: 404 });
        }
        // P2003 error would occur if onDelete: Cascade is not set and related records exist.
        return NextResponse.json({ status: "fail", data: error.message });
    }
}