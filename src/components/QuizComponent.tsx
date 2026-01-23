import React, { useState } from 'react';
import { QuizQuestion } from '@/data/courseData';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Trophy } from 'lucide-react';

interface QuizComponentProps {
  questions: QuizQuestion[];
  moduleId: number;
  onComplete: (score: number) => void;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ questions, moduleId, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<{ correct: boolean; selected: number[]; correctAnswers: number[] }[]>([]);

  const question = questions[currentQuestion];
  const isMultiSelect = question.correctAnswers.length > 1;

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;

    if (isMultiSelect) {
      setSelectedAnswers(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setSelectedAnswers([index]);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === 0) return;

    const isCorrect = 
      selectedAnswers.length === question.correctAnswers.length &&
      selectedAnswers.every(a => question.correctAnswers.includes(a));

    setAnswers(prev => [...prev, { 
      correct: isCorrect, 
      selected: selectedAnswers,
      correctAnswers: question.correctAnswers 
    }]);

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswers([]);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
      const finalScore = Math.round(((score + (showResult && answers[answers.length - 1]?.correct ? 0 : 0)) / questions.length) * 100);
      onComplete(finalScore);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const finalPercentage = Math.round((score / questions.length) * 100);

  if (quizCompleted) {
    return (
      <div className="glass-card rounded-2xl p-8 text-center animate-scale-in">
        <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
          finalPercentage >= 70 ? 'bg-success/20' : 'bg-warning/20'
        }`}>
          <Trophy className={`w-10 h-10 ${
            finalPercentage >= 70 ? 'text-success' : 'text-warning'
          }`} />
        </div>
        
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          Quiz terminé !
        </h3>
        
        <p className="text-4xl font-bold mb-2">
          <span className={finalPercentage >= 70 ? 'text-success' : 'text-warning'}>
            {score}/{questions.length}
          </span>
        </p>
        
        <p className="text-muted-foreground mb-6">
          {finalPercentage >= 70 
            ? "Félicitations ! Vous maîtrisez ce module." 
            : "Continuez à réviser pour améliorer votre score."}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={handleRestart} variant="outline" className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Recommencer
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 animate-fade-in">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} / {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx < currentQuestion 
                  ? answers[idx]?.correct ? 'bg-success' : 'bg-destructive'
                  : idx === currentQuestion 
                    ? 'bg-primary' 
                    : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-4">
          <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          <h3 className="font-semibold text-lg text-foreground">
            {question.question}
          </h3>
        </div>
        
        {isMultiSelect && (
          <p className="text-sm text-muted-foreground italic mb-4">
            (Plusieurs réponses possibles)
          </p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, idx) => {
          const isSelected = selectedAnswers.includes(idx);
          const isCorrectAnswer = question.correctAnswers.includes(idx);
          
          let optionClass = 'bg-card border-border hover:border-primary/50';
          
          if (showResult) {
            if (isCorrectAnswer) {
              optionClass = 'bg-success/10 border-success text-success';
            } else if (isSelected && !isCorrectAnswer) {
              optionClass = 'bg-destructive/10 border-destructive text-destructive';
            }
          } else if (isSelected) {
            optionClass = 'bg-primary/10 border-primary text-primary';
          }

          return (
            <button
              key={idx}
              onClick={() => handleAnswerSelect(idx)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${optionClass}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  isSelected ? 'border-current bg-current/20' : 'border-muted-foreground'
                }`}>
                  {showResult ? (
                    isCorrectAnswer ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : isSelected ? (
                      <XCircle className="w-4 h-4" />
                    ) : null
                  ) : isSelected ? (
                    <div className="w-2 h-2 rounded-full bg-current" />
                  ) : null}
                </div>
                <span className={showResult ? '' : 'text-foreground'}>{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div className={`p-4 rounded-xl mb-6 animate-fade-in ${
          answers[answers.length - 1]?.correct 
            ? 'bg-success/10 border border-success/30' 
            : 'bg-warning/10 border border-warning/30'
        }`}>
          <p className="text-sm">
            <strong>Explication :</strong> {question.explanation}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-end">
        {!showResult ? (
          <Button 
            onClick={handleSubmit} 
            disabled={selectedAnswers.length === 0}
            className="gradient-primary"
          >
            Valider
          </Button>
        ) : (
          <Button onClick={handleNext} className="gradient-primary">
            {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir le résultat'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
