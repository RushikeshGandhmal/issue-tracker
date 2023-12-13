/** @type {import('next').NextConfig} */
const nextConfig = {
  // when avatar is not loading coz goggle is blocking
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "referrer-policy",
            value: "no-referrer",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
