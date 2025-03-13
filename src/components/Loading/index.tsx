import React from 'react';
import './style.scss';

interface LoadingProps {
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ className }) => {
  return (
    <div className={`loading ${className}`}>
      <div className="loading-spinner" />
    </div>
  );
};

export default Loading;
