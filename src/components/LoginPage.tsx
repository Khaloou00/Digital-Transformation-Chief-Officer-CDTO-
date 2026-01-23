import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo-db.png';

const LoginPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 500));

    const success = login(password);
    if (!success) {
      setError('Mot de passe incorrect');
      setPassword('');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute inset-0 gradient-dark opacity-95" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10 w-full max-w-md animate-fade-in">
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-border/30 bg-card/95">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Decide and Build" 
              className="h-24 md:h-28 object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Formation CDTO
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Digital Transformation Chief Officer
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Mot de passe d'accès
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez le mot de passe"
                  className="pr-12 h-12 text-base bg-muted/50 border-border focus:border-primary focus:ring-primary"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 px-4 py-3 rounded-lg animate-scale-in">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading || !password}
              className="w-full h-12 text-base font-semibold gradient-primary hover:opacity-90 transition-opacity shadow-primary"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Vérification...
                </div>
              ) : (
                'Accéder à la formation'
              )}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-center text-xs text-muted-foreground">
              Formation certifiante • VERINET Solutions Digitales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
