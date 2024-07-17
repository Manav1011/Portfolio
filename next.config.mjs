/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                },
        ],
    }
};

export default nextConfig;
