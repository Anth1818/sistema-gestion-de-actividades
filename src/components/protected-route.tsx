"use client"
import { useEffect} from 'react';
import { useAuth } from '../context/auth-context';
import { useRouter } from 'next/navigation';


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const {userState} = useAuth();
  const isAuthenticatedStorage = localStorage.getItem('user');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {  
      if (!isAuthenticatedStorage && !userState) {
        router.replace('/denied');
      } 
    };

    checkAuth();
  }, [router]);

  // if (loading) {
  //   return <div>Loading...</div>; // O un spinner de carga
  // }

  if (!isAuthenticatedStorage && !userState) {
    return null; // O un spinner de carga
  }

  return <>{ children }</>;
};

export default ProtectedRoute;