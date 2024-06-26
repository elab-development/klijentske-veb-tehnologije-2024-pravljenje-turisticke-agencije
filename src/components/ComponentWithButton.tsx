// src/components/ComponentWithButton.tsx
import React from 'react';

interface ComponentWithButtonProps {
  onClick: () => void;
}

const ComponentWithButton: React.FC<ComponentWithButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Click me</button>
  );
};

export default ComponentWithButton;
