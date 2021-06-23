import React from 'react';
import './styles/grid.css'
const Container = ({ children, ...props }) => {
    return (
      <div
        {...props}
      >
        {children}
      </div>
    );
  };
  
//   Container.defaultProps = {
//     styles,
//     fluid: false,
//   };
  
  export default Container;