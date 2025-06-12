import { NextResponse } from 'next/server';

export function middleware(request) {
    // manage request, response
    console.log('================================================ middleware');
    return NextResponse.next()
}

export const config = {
    matcher: [
        '/api/:path*', '/products'
    ]
}