"use client"
import { useEffect, useState } from 'react';
import { useAuth } from '../context/auth-context';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const isAuthenticatedStorage = localStorage.getItem('isAuthenticated');
      if (!isAuthenticatedStorage || isAuthenticatedStorage !== 'true') {
        router.push('/login');
      } 
    }
  }, [isClient, router]);

//   if (!isClient) {
//     return null; // O un spinner de carga
//   }

//   if (!isAuthenticated || !isAuthenticatedStorage) {
//     return null; // O un spinner de carga
//   }

  return <>{children}</>;
};

export default ProtectedRoute;