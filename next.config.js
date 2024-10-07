/** @type {import('next').NextConfig} */
const nextConfig = {
  resctrictionMode: true,
  images:{
    domains:["lh3.googleusercontent.com","firebasestorage.googleapis.com"]
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  }
}

module.exports = nextConfig
