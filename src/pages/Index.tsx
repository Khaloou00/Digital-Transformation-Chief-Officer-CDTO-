import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import LoginPage from '@/components/LoginPage';
import Dashboard from '@/components/Dashboard';

const Index: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Dashboard /> : <LoginPage />;
};

export default Index;
