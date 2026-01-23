import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { courseModules } from '@/data/courseData';

interface ProgressContextType {
  completedSections: Set<string>;
  markSectionComplete: (sectionId: string) => void;
  markSectionIncomplete: (sectionId: string) => void;
  isSectionComplete: (sectionId: string) => boolean;
  getModuleProgress: (moduleId: number) => number;
  getOverallProgress: () => number;
  isModuleComplete: (moduleId: number) => boolean;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const PROGRESS_KEY = "cdto_progress";

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const stored = localStorage.getItem(PROGRESS_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setCompletedSections(new Set(parsed));
      } catch {
        setCompletedSections(new Set());
      }
    }
  }, []);

  const saveProgress = (sections: Set<string>) => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify([...sections]));
  };

  const markSectionComplete = (sectionId: string) => {
    setCompletedSections(prev => {
      const updated = new Set(prev);
      updated.add(sectionId);
      saveProgress(updated);
      return updated;
    });
  };

  const markSectionIncomplete = (sectionId: string) => {
    setCompletedSections(prev => {
      const updated = new Set(prev);
      updated.delete(sectionId);
      saveProgress(updated);
      return updated;
    });
  };

  const isSectionComplete = (sectionId: string): boolean => {
    return completedSections.has(sectionId);
  };

  const getModuleProgress = (moduleId: number): number => {
    const module = courseModules.find(m => m.id === moduleId);
    if (!module) return 0;
    
    const totalSections = module.sections.length;
    const completedCount = module.sections.filter(s => completedSections.has(s.id)).length;
    
    return totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0;
  };

  const getOverallProgress = (): number => {
    const totalSections = courseModules.reduce((acc, m) => acc + m.sections.length, 0);
    const completedCount = completedSections.size;
    
    return totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0;
  };

  const isModuleComplete = (moduleId: number): boolean => {
    return getModuleProgress(moduleId) === 100;
  };

  const resetProgress = () => {
    setCompletedSections(new Set());
    localStorage.removeItem(PROGRESS_KEY);
  };

  return (
    <ProgressContext.Provider value={{
      completedSections,
      markSectionComplete,
      markSectionIncomplete,
      isSectionComplete,
      getModuleProgress,
      getOverallProgress,
      isModuleComplete,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
