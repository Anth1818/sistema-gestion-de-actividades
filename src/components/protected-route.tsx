"use client"
import { useEffect, useState } from 'react';
import { useAuth } from '../context/auth-context';
import { useRouter } from 'next/navigation';
import PageDenied from '@/app/denied/page';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const isAuthenticatedStorage = localStorage.getItem('isAuthenticated');
      if (!isAuthenticatedStorage || isAuthenticatedStorage !== 'true') {
        router.replace('/denied');
      } else {
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    checkAuth();
  }, [router, setIsAuthenticated]);

  // if (loading) {
  //   return <div>Loading...</div>; // O un spinner de carga
  // }

  if (!isAuthenticated) {
    return null; // O un spinner de carga
  }

  return <>{ children }</>;
};

export default ProtectedRoute;