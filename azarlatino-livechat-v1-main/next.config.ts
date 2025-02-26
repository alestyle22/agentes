import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Asegúrate de que Next.js maneje correctamente el proyecto
  reactStrictMode: true,

  // Opción de output en "standalone" si necesitas que Vercel lo maneje bien
  output: "standalone",

  // Si el directorio raíz no está en la raíz del repositorio, debes indicar el path
  basePath: '/azarlatino-livechat-v1-main',  // Si el proyecto está en una subcarpeta

  // Si estás trabajando con una estructura de carpetas compleja, puedes configurar el publicPath o usar rewrites
  // Esto es útil si hay un conflicto de rutas
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/app",  // Redirige a /app o la carpeta donde se encuentra el código de Next.js
      },
    ];
  },
};

export default nextConfig;
