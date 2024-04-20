/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wfihorlidbwjqyxuepaf.supabase.co",
        port: "",
        pathname: "/storage/v1/**",
      },
    ],
  },
};

// module.exports = {
//   // reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "wfihorlidbwjqyxuepaf.supabase.co",
//         port: "",
//         pathname: "/storage/v1/**",
//       },
//     ],
//   },
// };
export default nextConfig;
