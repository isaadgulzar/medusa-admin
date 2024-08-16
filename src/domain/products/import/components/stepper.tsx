import React from 'react';

interface StepperProps {
  steps: string[];
  activeStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => {
  return (
    <div className='flex items-center gap-10'>
        {steps.map((step, index) => (
        <div
        key={index}
        className={`flex-shrink-0 flex items-center gap-2`}
        >
            <span className={`h-8 w-8 flex items-center justify-center rounded-full text-white ${activeStep === index + 1 ? 'bg-orange' : 'bg-hex-bb'}`}>{index + 1}</span>
            <span className={`${activeStep === index + 1 ? 'text-hex-33' : 'text-hex-99'}`}>{step}</span>
        </div>
        ))}
    </div>
  );
};

export default Stepper;
