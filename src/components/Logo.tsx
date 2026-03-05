import React from 'react';

export const Logo = ({ light = false, className = "" }: { light?: boolean, className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://lh3.googleusercontent.com/d/1NNwlZqdPardJJmPG_RP4VfLWAWmlzR34" 
        alt="Risco Brasil Seguros" 
        className={`h-16 w-auto object-contain ${light ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};
