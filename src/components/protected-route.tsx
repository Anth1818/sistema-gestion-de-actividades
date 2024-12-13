"use client"
import { useEffect, useState} from 'react';
import { useAuth } from '../context/auth-context';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const authContext = useAuth();
  const userState = authContext?.userState;
  const setUserState = authContext?.setUserState;
  // const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const userCookie = Cookies.get('user');
      if (userCookie) {
        setUserState(JSON.parse(userCookie));
      } else {
        router.replace('/denied');
      }
    };

    checkAuth();
  }, [router, setUserState]);

  // if (loading) {
  //   return <div>Loading...</div>; // O un spinner de carga
  // }

  if (!userState) {
    return null; // O un spinner de carga
  }

  return <>{children}</>;
};

export default ProtectedRoute;