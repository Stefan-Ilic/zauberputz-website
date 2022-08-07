const path = require('path');
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    handleImages: ['webp', 'svg', 'png', 'jpg'],

    images: {
      disableStaticImages: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    optimizeFonts: false,
    distDir: 'build',
    compress: true,
    minify: true,
})