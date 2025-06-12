import { NextResponse } from 'next/server';

export function middleware(request, response) {

    // manage request, response
    // const reqHeaders = new Headers(request.headers);
    // const token = reqHeaders.get("token")
    // if(token === '123-ABC') {
    //     return NextResponse.next({
    //         request: {headers: reqHeaders} // request header
    //     })
    // } else {
    //     const res =  NextResponse.json(
    //         {msg: "Bad request"}, {status: 400}
    //     )
    //     res.headers.set('API-KEY', 'Example')
    //     return res;
    // }

    console.log('================================================ middleware');
    // if(request.nextUrl.pathname.startWith("/api/products")) {
    //     console.log('This is api for products');
    //     return NextResponse.next()
    // } else if(request.nextUrl.pathname.startWith("/api/users"))  {
    //     console.log('This is api for not users');
    //     return NextResponse.next()
    // }
    return NextResponse.next()
}

export const config = {
    matcher: [
        '/api/:path*', '/products'
    ]
}
// maddison53@ethereal.email
// jn7jnAPss4f63QBp6D
