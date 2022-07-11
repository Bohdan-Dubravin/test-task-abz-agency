import React from 'react';

const Button = ({
  disabled = false,
  children,
  classModificator = '',
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`button ${classModificator}`}
      disabled={disabled}
    >
      {children || 'Default text'}
    </button>
  );
};

export default Button;
