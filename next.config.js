const path = require('path');
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
});

const nextConfig = {
  handleImages: ['webp', 'svg', 'png', 'jpg'],

  images: {
    loader: 'akamai',
    path: '',
  },
  sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
  optimizeFonts: true,
  distDir: 'build',
  compress: true,
  minify: true,
  swcMinify: true,
  optimization: {
    minimize: true
  }
}

module.exports = withOptimizedImages(nextConfig);
// module.exports = withBundleAnalyzer(nextConfig);
// module.exports = nextConfig;