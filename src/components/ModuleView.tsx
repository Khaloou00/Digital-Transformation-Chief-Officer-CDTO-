import React, { useState } from 'react';
import { Module, Section, courseModules } from '@/data/courseData';
import { useProgress } from '@/contexts/ProgressContext';
import ProgressRing from './ProgressRing';
import QuizComponent from './QuizComponent';
import ThemeToggle from './ThemeToggle';
import { ArrowLeft, CheckCircle2, Circle, ChevronDown, Lightbulb, BookOpen, GraduationCap, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ModuleViewProps {
  module: Module;
  onBack: () => void;
  onNextModule?: (moduleId: number) => void;
}

const ModuleView: React.FC<ModuleViewProps> = ({ module, onBack, onNextModule }) => {
  const { isSectionComplete, markSectionComplete, markSectionIncomplete, getModuleProgress } = useProgress();
  const [expandedSection, setExpandedSection] = useState<string | null>(module.sections[0]?.id || null);
  const [showQuiz, setShowQuiz] = useState(false);
  const progress = getModuleProgress(module.id);
  
  // Check if all sections are complete
  const isModuleComplete = module.sections.every(section => isSectionComplete(section.id));
  
  // Get next module
  const currentIndex = courseModules.findIndex(m => m.id === module.id);
  const nextModule = currentIndex < courseModules.length - 1 ? courseModules[currentIndex + 1] : null;
  
  const handleNextModule = () => {
    if (nextModule && onNextModule) {
      onNextModule(nextModule.id);
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(prev => prev === sectionId ? null : sectionId);
  };

  const handleToggleComplete = (sectionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSectionComplete(sectionId)) {
      markSectionIncomplete(sectionId);
    } else {
      markSectionComplete(sectionId);
    }
  };

  const handleQuizComplete = (score: number) => {
    console.log(`Quiz completed with score: ${score}%`);
  };

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="container max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setShowQuiz(false)}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Quiz - Module {module.id}</p>
                <h1 className="font-display font-bold text-lg">{module.shortTitle}</h1>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="container max-w-4xl mx-auto px-4 py-8">
          <QuizComponent questions={module.quiz} moduleId={module.id} onComplete={handleQuizComplete} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}><ArrowLeft className="w-5 h-5" /></Button>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <BookOpen className="w-4 h-4" /><span>Module {module.id}</span>
              </div>
              <h1 className="font-display font-bold text-lg md:text-xl text-foreground truncate">{module.shortTitle}</h1>
            </div>
            <ThemeToggle />
            <ProgressRing progress={progress} size={50} strokeWidth={4} />
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img src={module.bannerImage} alt={module.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h2 className="font-display font-bold text-xl md:text-2xl text-foreground">{module.title}</h2>
        </div>
      </div>

      {/* Content */}
      <main className="container max-w-4xl mx-auto px-4 py-6 md:py-8">
        <div className="glass-card rounded-xl p-6 mb-6 border border-border/50">
          <p className="text-muted-foreground">{module.description}</p>
        </div>

        {/* Sections */}
        <div className="space-y-3">
          {module.sections.map((section, index) => (
            <SectionCard
              key={section.id}
              section={section}
              index={index}
              isExpanded={expandedSection === section.id}
              isComplete={isSectionComplete(section.id)}
              onToggle={() => toggleSection(section.id)}
              onToggleComplete={(e) => handleToggleComplete(section.id, e)}
            />
          ))}
        </div>

        {/* Key Message */}
        <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-2">Message clé du module</h3>
              <p className="text-foreground/80 italic">"{module.keyMessage}"</p>
            </div>
          </div>
        </div>

        {/* Quiz Button */}
        {module.quiz && module.quiz.length > 0 && (
          <div className="mt-8">
            <Button onClick={() => setShowQuiz(true)} className="w-full gradient-primary gap-2 py-6 text-lg">
              <GraduationCap className="w-5 h-5" />
              Passer le Quiz ({module.quiz.length} questions)
            </Button>
          </div>
        )}

        {/* Next Module Button - Only shows when module is 100% complete */}
        {isModuleComplete && nextModule && (
          <div className="mt-6 animate-fade-in">
            <div className="p-4 rounded-xl bg-success/10 border border-success/30 mb-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-success" />
                <div>
                  <p className="font-semibold text-success">Module terminé !</p>
                  <p className="text-sm text-muted-foreground">Toutes les sections ont été complétées.</p>
                </div>
              </div>
            </div>
            <Button 
              onClick={handleNextModule} 
              className="w-full bg-success hover:bg-success/90 text-success-foreground gap-2 py-6 text-lg"
            >
              Passer au module suivant
              <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Module {nextModule.id} : {nextModule.shortTitle}
            </p>
          </div>
        )}

        {/* Completion message for last module */}
        {isModuleComplete && !nextModule && (
          <div className="mt-6 p-6 rounded-xl bg-success/10 border border-success/30 text-center animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-3" />
            <h3 className="font-display font-bold text-xl text-success mb-2">🎉 Félicitations !</h3>
            <p className="text-muted-foreground">Vous avez terminé tous les modules de la formation CDTO.</p>
            <Button onClick={onBack} className="mt-4 gradient-primary">
              Retour au tableau de bord
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

interface SectionCardProps {
  section: Section;
  index: number;
  isExpanded: boolean;
  isComplete: boolean;
  onToggle: () => void;
  onToggleComplete: (e: React.MouseEvent) => void;
}

const SectionCard: React.FC<SectionCardProps> = ({ section, index, isExpanded, isComplete, onToggle, onToggleComplete }) => {
  return (
    <div className={`rounded-xl border transition-all duration-300 animate-slide-up ${isComplete ? 'bg-success/5 border-success/30' : 'bg-card border-border/50 hover:border-primary/30'}`} style={{ animationDelay: `${index * 0.05}s` }}>
      <button onClick={onToggle} className="w-full flex items-center gap-4 p-4 md:p-5 text-left">
        <button onClick={onToggleComplete} className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isComplete ? 'text-success hover:opacity-80' : 'text-muted-foreground hover:text-primary'}`}>
          {isComplete ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
        </button>
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold transition-colors ${isComplete ? 'text-success' : 'text-foreground'}`}>{section.title}</h3>
        </div>
        <div className={`flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 md:px-5 pb-5 pt-0 animate-fade-in">
          <div className="pl-12 space-y-4">
            {section.content.map((paragraph, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed">{paragraph}</p>
            ))}

            {section.figures && section.figures.length > 0 && (
              <div className="space-y-4 mt-4">
                {section.figures.map((figure, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-border/50">
                    <img src={figure.src} alt={figure.caption} className="w-full h-auto" />
                    <p className="text-xs text-muted-foreground p-2 bg-muted/30 flex items-center gap-2">
                      <ImageIcon className="w-3 h-3" /> {figure.caption}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {section.keyPoints && section.keyPoints.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border/50">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Points clés :</h4>
                <div className="flex flex-wrap gap-2">
                  {section.keyPoints.map((point, i) => (
                    <span key={i} className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary font-medium">{point}</span>
                  ))}
                </div>
              </div>
            )}

            {!isComplete && (
              <Button onClick={onToggleComplete} className="mt-4 gradient-primary hover:opacity-90 transition-opacity">
                <CheckCircle2 className="w-4 h-4 mr-2" />Marquer comme terminé
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleView;
