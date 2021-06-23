import React from 'react';
import './styles/grid.css'

const Button = (props) => {

    
   return (
        // <div class={`col-${props.columns}`}>
        //     One of three columns
        // </div>

        <div class={props.columns}>
            One of three columns
        </div>
   )
}
export default Button;