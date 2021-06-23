import React from 'react';
import './styles/grid.css'

const Row = ({ children, ...props }) => {
    return (
      <div
        {...props}
      >
        {children}
      </div>
    );
  };
  
  export default Row;