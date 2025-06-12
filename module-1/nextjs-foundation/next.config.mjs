/** @type {import('next').NextConfig} */
const nextConfig = {
    generateEtags: false,
    trailingSlash: false,
    productionBrowserSourceMaps: true,
    httpAgentOptions: {
        keepAlive: true,
        timeout: 10000
    },
    compress: true,
    distDir: "build",
    reactStrictMode: true,
    pageExtensions: ["js", "jsx"],
    poweredByHeader: false,
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
                    {'key': 'app-auth-key', value: '123-35345'},
                ]

            },
            {
                source: "/:path*",
                headers:[
                    {key: 'app-auth-key-all', value: '123-35345'},
                    {key: 'X-Frame-Options', value: 'DENY'}, // iframe disallow
                    {key: 'Content-Security-Policy', value: "default-src 'self';script-src 'self';child-src example.com; style-src 'self' example.com;font-src 'self'"}, // iframe disallow
                    {
                        key: 'Permission-Policy',
                        value: "camera();battery=(self); browsing-topics=();geolocation=();microphone=('https://abc_domain.com)"
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
