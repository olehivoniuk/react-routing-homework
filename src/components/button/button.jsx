// Button.js
import React from 'react';
import './Button.css'; 

function Button({ size = 'medium', variant = 'regular', text, onClick }) {
  const getClassNames = () => {
    let classNames = 'button';

    classNames += ` button-${size}`;
    classNames += ` button-${variant}`;

    return classNames;
  };

  return (
    <button className={getClassNames()} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
