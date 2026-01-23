import React from 'react';
import { Module } from '@/data/courseData';
import { useProgress } from '@/contexts/ProgressContext';
import ProgressRing from './ProgressRing';
import { ChevronRight, CheckCircle2, BookOpen } from 'lucide-react';

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick, index }) => {
  const { getModuleProgress, isModuleComplete } = useProgress();
  const progress = getModuleProgress(module.id);
  const isComplete = isModuleComplete(module.id);

  return (
    <button
      onClick={onClick}
      className="group w-full text-left glass-card rounded-xl p-5 md:p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 animate-slide-up hover:shadow-lg"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-start gap-4">
        {/* Module number */}
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-display font-bold text-lg ${
          isComplete 
            ? 'gradient-success text-success-foreground' 
            : progress > 0 
              ? 'gradient-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground'
        }`}>
          {isComplete ? (
            <CheckCircle2 className="w-6 h-6" />
          ) : (
            String(module.id).padStart(2, '0')
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {module.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {module.description}
          </p>
          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{module.sections.length} sections</span>
          </div>
        </div>

        {/* Progress & Arrow */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <ProgressRing progress={progress} size={44} strokeWidth={3} />
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </button>
  );
};

export default ModuleCard;
