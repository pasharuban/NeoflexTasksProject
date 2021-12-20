import React from 'react';

import './index.css';

const LoadingSpinner: React.FC<{ spinnerClass?: string }> = ({ spinnerClass }) => {
  const className = `loadingio-spinner-spinner-e7cbn6oty6h ${spinnerClass}`;

  return (
    <div className={className}>
      <div className="ldio-hje4guba7le">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default LoadingSpinner;
