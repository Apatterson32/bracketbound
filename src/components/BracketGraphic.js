import React from 'react';

function BracketGraphic() {
  return (
    <svg viewBox="0 0 400 300" className="w-full">
      <path 
        d="M50,50 Q150,100 200,150 T350,250" 
        fill="none" 
        stroke="#FF6B35" 
        strokeWidth="4" 
        strokeDasharray="10,5"
      />
    </svg>
  );
}

export default BracketGraphic;
