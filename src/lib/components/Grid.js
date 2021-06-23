import React from 'react';
import './styles/grid.css'

const Button = ({ children, ...props }) => {

    
   return (
        // <div class={`col-${props.columns}`}>
        //     One of three columns
        // </div>

        <div class={props.columns}>
            {children}
        </div>
   );
};

export default Button;