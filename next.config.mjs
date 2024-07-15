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
        ],
    }
};

export default nextConfig;
