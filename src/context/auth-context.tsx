"use client"
import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { set } from 'date-fns';

interface AuthContextType {
  isAuthenticated: boolean;
  wrongCredentials: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const router = useRouter();
  const users = [
    { username: 'admin', password: 'password' },
    { username: 'user', password: 'password' },
  ]

  const login = (username: string, password: string) => {
    // Verifica si las credenciales coinciden con alguno de los usuarios
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setWrongCredentials(false);
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/dashboard');
    } else {
      // Maneja el error de autenticación si las credenciales son incorrectas
      console.error('Credenciales incorrectas');
        setWrongCredentials(true);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    router.replace('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout, wrongCredentials}}>
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