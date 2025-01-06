import createMDX from '@next/mdx';

const withMDX = createMDX({
    extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    transpilePackages: ['next-mdx-remote'],
};

export default withMDX(nextConfig);
