/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'talent-main.s3.us-east-005.backblazeb2.com',
                pathname: '**', // allow all paths
            },
        ],
    },
};

export default nextConfig;
