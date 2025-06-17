import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { skip } from "node:test";

export async function GET(request) {
    try {
        const prisma = new PrismaClient({log:['query', 'info', 'warn', 'error']});
        const searchParams = request.nextUrl.searchParams; // Get search parameters from the URL

        const where = {}; // Initialize an empty where clause

        // Add search conditions based on query parameters
        if (searchParams.has('name')) {
            where.name = {
                contains: searchParams.get('name'),
                mode: 'insensitive', // Case-insensitive search
            };
        }
        if (searchParams.has('email')) {
            where.email = {
                contains: searchParams.get('email'),
                mode: 'insensitive',
            };
        }
        if (searchParams.has('city')) {
            where.profile = {
                city: {
                    contains: searchParams.get('city'),
                    mode: 'insensitive',
                },
            };
        }
        if (searchParams.has('title')) {
            // For posts, we need to search within the array of posts.
            // Prisma's `some` or `every` can be used for array relations.
            // `some` means at least one related post must match.
            where.post = {
                some: {
                    title: {
                        contains: searchParams.get('title'),
                        mode: 'insensitive',
                    },
                },
            };
        }
        if (searchParams.has('description')) {
            where.post = {
                some: {
                    description: {
                        contains: searchParams.get('description'),
                        mode: 'insensitive',
                    },
                },
            };
        }

        // aggregate
        // const users = await prisma.User.aggregate({
        //     _count: {id: true},
        //     _sum: {salary: true},
        //     _avg: {salary: true},
        //     _min: {salary: true},
        //     _max: {salary: true},
        // })

        const users = await prisma.User.findMany({
            orderBy:{id: 'desc'},
            skip: 2,
            take: 2, // limit
            where: where, // Apply the constructed where clause
            select: {
                id:true, name: true, email: true,
                profile: {
                    select: {firstName: true, lastName:true}
                }, // Always include the related profile data
                post: {
                    where: {title: contains("Prisma")},
                    orderBy: {id: "desc"}
                },    // Always include the related post data
                comments: true
            },
            // include: {
            //     profile: {
            //         select: {firstName: true, lastName:true}
            //     }, // Always include the related profile data
            //     post: {
            //         where: {title: contains("Prisma")},
            //         orderBy: {id: "desc"}
            //     },    // Always include the related post data
            //     comments: true
            // },
        });

        return NextResponse.json({ status: "success", data: users });
    } catch (error) {
        // Log the error for debugging purposes (optional but recommended)
        console.error("Error fetching users:", error);
        return NextResponse.json({ status: "fail", data: error.message || "An unexpected error occurred" });
    }
}

export async function POST(request) {
    try {
        const prisma = new PrismaClient();
        const payload = await request.json();

        // nested object create
        let userData = await prisma.User.create({
            data: {
                name: payload['name'],
                email: payload['email'],
                password: payload['password'],
                role: payload['role'],
                active: true,
                profile: {
                    create: {
                        firstName: payload['firstName'],
                        lastName: payload['lastName'],
                        mobile: payload['mobile'],
                        city: payload['city']
                    }
                },
                post: {
                    create: {
                        title: payload['title'],
                        description: payload['description']
                    },
                }
            }
        })

        // let profileData = await prisma.Profile.create({
        //     data: {
        //         firstName: payload['firstName'],
        //         lastName: payload['lastName'],
        //         mobile: payload['mobile'],
        //         city: payload['city'],
        //         userID: userData.id
        //     }
        // })
        return NextResponse.json({status: "success", data: userData})
    } catch (error) {
        return NextResponse.json({status: "fail", data:error})
    }
}