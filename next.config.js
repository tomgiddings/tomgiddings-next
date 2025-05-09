/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  static_site_generator: next,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig
