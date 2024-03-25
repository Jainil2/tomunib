// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['lh3.googleusercontent.com'],
//     },

// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack: (config) => {
    // Add the file loader for mp4 files
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
