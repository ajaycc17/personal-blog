/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: "",
                pathname: "/ajaycc17/blog_articles/main/images/**",
            },
        ],
    },
};

module.exports = nextConfig;
