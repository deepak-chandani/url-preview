import React from 'react';

const Spinner = ({text = 'Loading...'}) => {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">{text}</span>
    </div>
  )
}

export default Spinner;
