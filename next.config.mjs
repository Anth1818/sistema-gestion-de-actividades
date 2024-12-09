/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/login/recover-password', // La ruta que deseas ignorar
          destination: '/', // La ruta a la que deseas redirigir
          permanent: false, // Puedes cambiar esto a true si deseas una redirección permanente
        },
      ];
    },
  };
  
  export default nextConfig;
