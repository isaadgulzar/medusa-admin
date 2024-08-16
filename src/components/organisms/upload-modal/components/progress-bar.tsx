import React from 'react';
import { HourGlass, CrossIcon } from 'lucide-react';

interface ProgressBarProps {
  progress: number;
  progressBarColorHex?: string;
  label: React.ReactNode;
  cancelLabel?: string;
  cancelIcon?: React.ReactNode;
  onCancel?: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, progressBarColorHex, label, cancelLabel, cancelIcon, onCancel }) => {
  return (
    <div className="flex flex-col gap-2 justify-center w-full">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-3">
            {label}
        </p>
        <button className="flex items-center gap-2 text-red-500" onClick={onCancel}>
          {cancelIcon}
          <span>{cancelLabel}</span>
        </button>
      </div>
      <div className="h-4 w-full bg-gray-200">
        <div
          style={{ width: `${progress}%`, backgroundColor: `${progressBarColorHex || '#6FABFF'}`}}
          className="h-full transition-width duration-150 ease-in-out"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
