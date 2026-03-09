import React from 'react';

export const Logo = ({ className = '', color = 'currentColor' }: { className?: string, color?: string }) => {
  return (
    <svg viewBox="0 0 300 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Diamond */}
      <g stroke={color} strokeWidth="4" strokeLinejoin="round">
        <path d="M150 10 L220 55 L150 100 L80 55 Z" />
      </g>
      {/* R */}
      <text x="150" y="78" fontFamily="'Times New Roman', Times, serif" fontSize="75" fontStyle="italic" fill={color} textAnchor="middle">R</text>
      {/* RISCO BRASIL */}
      <text x="135" y="120" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="400" letterSpacing="0.1em" fill={color} textAnchor="end">RISCO</text>
      <text x="165" y="120" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="400" letterSpacing="0.1em" fill={color} textAnchor="start">BRASIL</text>
      {/* SEGUROS */}
      <text x="150" y="138" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0.3em" fill={color} textAnchor="middle">SEGUROS</text>
    </svg>
  );
};
