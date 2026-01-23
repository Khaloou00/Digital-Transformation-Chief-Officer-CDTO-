import React, { useState } from 'react';
import { courseModules, courseInfo, moduleBanners } from '@/data/courseData';
import { useProgress } from '@/contexts/ProgressContext';
import { useAuth } from '@/contexts/AuthContext';
import ModuleCard from './ModuleCard';
import ModuleView from './ModuleView';
import ProgressRing from './ProgressRing';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import CertificateGenerator from './CertificateGenerator';
import { LogOut, Award, BookOpen, Target, RotateCcw, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-db.png';

const Dashboard: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const { getOverallProgress, resetProgress } = useProgress();
  const { logout } = useAuth();
  const overallProgress = getOverallProgress();

  const currentModule = selectedModule !== null 
    ? courseModules.find(m => m.id === selectedModule) 
    : null;

  if (currentModule) {
    return (
      <ModuleView 
        module={currentModule} 
        onBack={() => setSelectedModule(null)}
        onNextModule={(moduleId) => setSelectedModule(moduleId)}
      />
    );
  }

  const completedModules = courseModules.filter(m => {
    const totalSections = m.sections.length;
    const completedSections = m.sections.filter(s => {
      const stored = localStorage.getItem("cdto_progress");
      if (!stored) return false;
      try {
        const parsed = JSON.parse(stored);
        return parsed.includes(s.id);
      } catch {
        return false;
      }
    }).length;
    return completedSections === totalSections;
  }).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="VERINET" className="h-10 md:h-12 object-contain" />
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-foreground text-sm md:text-base">Formation CDTO</h1>
                <p className="text-xs text-muted-foreground">{courseInfo.organization}</p>
              </div>
            </div>

            <div className="hidden md:block flex-1 max-w-md mx-4">
              <SearchBar onSelectModule={setSelectedModule} />
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={resetProgress} className="text-muted-foreground hover:text-destructive" title="Réinitialiser">
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={logout} className="text-muted-foreground hover:text-foreground">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="md:hidden mt-3">
            <SearchBar onSelectModule={setSelectedModule} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark opacity-95" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative container max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                <span>Certification Professionnelle</span>
              </div>
              
              <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Digital Transformation<br />
                <span className="text-gradient-primary">Chief Officer</span>
              </h1>
              
              <p className="text-white/70 mb-6 max-w-lg">
                Formation complète pour maîtriser la transformation digitale et obtenir la certification CDTO.
              </p>

              <div className="flex items-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{courseInfo.totalModules} Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>Objectif : {courseInfo.examInfo.passingScore}%</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end animate-slide-up">
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 bg-white/5 backdrop-blur-xl w-full max-w-sm">
                <h2 className="font-display font-semibold text-white text-center mb-6">Votre progression</h2>
                
                <div className="flex justify-center mb-6">
                  <ProgressRing progress={overallProgress} size={120} strokeWidth={8} className="text-white" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 rounded-lg bg-white/5">
                    <p className="text-2xl font-bold text-white">{completedModules}</p>
                    <p className="text-xs text-white/60">Modules terminés</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5">
                    <p className="text-2xl font-bold text-white">{courseInfo.totalModules - completedModules}</p>
                    <p className="text-xs text-white/60">Restants</p>
                  </div>
                </div>

                {overallProgress === 100 && (
                  <div className="mt-6 p-4 rounded-lg gradient-success text-center">
                    <GraduationCap className="w-8 h-8 mx-auto mb-2 text-success-foreground" />
                    <p className="font-semibold text-success-foreground">Formation terminée !</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <main className="container max-w-6xl mx-auto px-4 py-8 md:py-12">
        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">Modules de formation</h2>

        <div className="grid gap-4">
          {courseModules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} onClick={() => setSelectedModule(module.id)} />
          ))}
        </div>

        {/* Certificate Section */}
        <div className="mt-12">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">Votre certificat</h2>
          <CertificateGenerator isEligible={overallProgress === 100} />
        </div>

        {/* Exam Info */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          <div className="glass-card rounded-xl p-5 border border-border/50 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="font-display font-bold text-primary text-lg">{courseInfo.examInfo.qcmWeight}%</span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">QCM Stratégiques</h3>
            <p className="text-sm text-muted-foreground">{courseInfo.examInfo.qcmQuestions} questions</p>
          </div>
          
          <div className="glass-card rounded-xl p-5 border border-border/50 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-secondary/10 flex items-center justify-center">
              <span className="font-display font-bold text-secondary text-lg">{courseInfo.examInfo.reasoningWeight}%</span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Raisonnement</h3>
            <p className="text-sm text-muted-foreground">{courseInfo.examInfo.reasoningQuestions} mises en situation</p>
          </div>
          
          <div className="glass-card rounded-xl p-5 border border-border/50 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-accent/10 flex items-center justify-center">
              <span className="font-display font-bold text-accent text-lg">{courseInfo.examInfo.caseStudyWeight}%</span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Étude de cas</h3>
            <p className="text-sm text-muted-foreground">Transformation complète</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Formateur : <span className="font-medium text-foreground">{courseInfo.instructor}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">{courseInfo.credentials}</p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
