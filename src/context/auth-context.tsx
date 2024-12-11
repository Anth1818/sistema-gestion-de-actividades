"use client"
import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query'
import api from '@/api/api_regiones';


interface AuthContextType {
  isAuthenticated?: boolean;
  wrongCredentials: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  userState: any;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userState, setUserState] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async ({ user, pass }: { user: string, pass: string }) => {
      const response = await api.post('/auth', { user, pass });
      return response.data;
    },
  })

  const login = (user: string, pass: string) => {
    // Verifica si las credenciales coinciden con alguno de los usuarios
    mutation.mutate({ user, pass }, {
      onSuccess: (data) => {
        if (data.data) {
          setWrongCredentials(false);
          localStorage.setItem('user', JSON.stringify(data));
          setUserState(data.data);
          if (data.data.role_id === 1) {
            router.push('/dashboard/achievements');
          } else if (data.data.role_id === 2) {
            router.push('/dashboard/schedule');
          }
        }
        console.log('Credenciales correctas');
        console.log(data);
      },
      onError: () => {
        console.error('Credenciales incorrectas');
        setWrongCredentials(true);
      }
    });
  };

const logout = () => {
  setUserState(null);
  localStorage.removeItem('user');
  router.replace('/login');
};

return (
  <AuthContext.Provider value={{ userState, setIsAuthenticated, login, logout, wrongCredentials }}>
    {children}
  </AuthContext.Provider>
);
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};