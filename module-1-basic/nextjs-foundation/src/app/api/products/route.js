import { NextResponse, NextRequest } from 'next/server';
import {cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation';


// get request with query params
export async function GET(request, response) {
    const {searchParams } = new URL(request.url);
    const id = searchParams.get('id')
    redirect('/')
    return NextResponse.json({message: id}, { status: 200 })
}

// post with query params and body
export async function POST(request, response) {
    // cookies
    const cookieStore = cookies();
    const tokenCookie = cookieStore.get('csrf_token');

    const cookie_value = tokenCookie?.value || null;
    const cookie_name = tokenCookie?.name || null;

    // headers
    const headerList = headers()
    const token = (await headerList).get("token")
    const apiKey = (await headerList).get("api-key")

    // read query params
    const {searchParams } = new URL(request.url);
    const id = searchParams.get('id')

    // read request body or payload
    const body = await request.json();
    // const { name, age, city } = body;
    return NextResponse.json({
        id, ...body, token, apiKey, cookie_value, cookie_name
    }, {
        status: 201,
        headers: {
            'token': apiKey,
            'Set-Cookies': 'Auth=123;Path=/;',
        }
    })
}

// put
export async function PUT(request, response) {
    // read request body or payload
    const fData = await request.formData();
    let name = fData.get('name');
    let age = fData.get('age');

    const file = fData.get('thumbnail'); // this is a File object
    if (!file || typeof file === 'string') {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // You can now access file properties:
    const fileData = {
        name: file.name,
        type: file.type,
        size: file.size,
    };

    // If you want to read file content:
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return NextResponse.json({name, age,  thumbnail: fileData,})
}

// patch
export async function PATCH(request, response) {
    return NextResponse.json({status: true, message: "Post Response"})
}

// delete
export async function DELETE(request, response) {
    return NextResponse.json({status: true, message: "Post Response"})
}