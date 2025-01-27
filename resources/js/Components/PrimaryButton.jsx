import React from 'react';

const PrimaryButton = ({ asChild, className = '', children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2";
  const combinedStyles = `${baseStyles} ${className}`;

  if (asChild) {
    return React.cloneElement(children, {
      className: `${combinedStyles} ${children.props.className || ''}`,
      ...props,
    });
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
