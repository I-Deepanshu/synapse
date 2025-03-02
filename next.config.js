/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    },
    env: {
      MONGO_URI: "mongodb+srv://deepanshusnpt:vL7gRfzBp0HXHFAu@onco.prwbs.mongodb.net/",
      JWT_SECRET: "2bf8906be62d5f28384f96a8c04ecc79bf515f58c816cd5c715b6fa7f7818d4677c07f452afd324740e8f5681a03813fb6693cb75989a36e731054ac40910634",
    },
  };

  module.exports = nextConfig;
