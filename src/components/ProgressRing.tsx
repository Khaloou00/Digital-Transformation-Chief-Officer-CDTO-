import React from 'react';

interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  showPercentage?: boolean;
}

const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size = 60,
  strokeWidth = 4,
  className = '',
  showPercentage = true
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  const getColor = () => {
    if (progress === 100) return 'hsl(var(--success))';
    if (progress >= 50) return 'hsl(var(--primary))';
    return 'hsl(var(--warning))';
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="progress-ring"
        />
      </svg>
      {showPercentage && (
        <span 
          className="absolute text-xs font-semibold"
          style={{ color: getColor() }}
        >
          {progress}%
        </span>
      )}
    </div>
  );
};

export default ProgressRing;
