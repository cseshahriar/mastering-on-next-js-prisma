import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

// detail
export async function GET(request, { params }) {
    try {
        const prisma = new PrismaClient();
        const { id } = params; // Get the user ID from the URL parameters

        const user = await prisma.User.findUnique({
            where: {
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

// update
export async function PATCH(request, { params }) {
    try {
        const prisma = new PrismaClient();
        const { id } = params;
        const payload = await request.json();

        // Separate user and profile/post data for updates
        const { name, email, password, role, active, firstName, lastName, mobile, city, title, description, ...rest } = payload;

        const userDataToUpdate = {};
        if (name !== undefined) userDataToUpdate.name = name;
        if (email !== undefined) userDataToUpdate.email = email;
        if (password !== undefined) userDataToUpdate.password = password; // Consider hashing password before updating
        if (role !== undefined) userDataToUpdate.role = role;
        if (active !== undefined) userDataToUpdate.active = active;

        const updatedUser = await prisma.User.update({
            where: {
                id: parseInt(id),
            },
            data: {
                ...userDataToUpdate,
                // Handle nested updates for profile and post if provided in the payload
                profile: (firstName !== undefined || lastName !== undefined || mobile !== undefined || city !== undefined) ? {
                    update: { // Use 'update' for existing related records
                        ...(firstName !== undefined && { firstName }),
                        ...(lastName !== undefined && { lastName }),
                        ...(mobile !== undefined && { mobile }),
                        ...(city !== undefined && { city }),
                    }
                } : undefined, // Don't try to update if no profile data is provided
            },
            include: {
                profile: true,
                post: true,
            }
        });

        return NextResponse.json({ status: "success", data: updatedUser });
    } catch (error) {
        if (error.code === 'P2025') { // Prisma error code for record not found
            return NextResponse.json({ status: "fail", data: "User not found for update" }, { status: 404 });
        }
        return NextResponse.json({ status: "fail", data: error.message });
    }
}

export async function DELETE(request, { params }) {
    try {
        const prisma = new PrismaClient();
        const { id } = params;

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