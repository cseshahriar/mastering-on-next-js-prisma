/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'], // Add any image domains you use
    },
    basePath: "",
    env:{
        API: "sdf97dfdfdf",
        API_BASE_URL: "http://localhost:3000/"
    },
    async headers() {
        return [
            {
                source: "/product",
                headers:[
                    {'key': 'app-auth-key', value: '123-35345'}
                ]

            },
            {
                source: "/:path*",
                headers:[
                    {'key': 'app-auth-key-all', value: '123-35345'}
                ]

            }
        ]
    }
};

export default nextConfig;
