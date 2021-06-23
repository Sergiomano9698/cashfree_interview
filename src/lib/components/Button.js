import React, {useState, useEffect} from 'react';
// import  './styles/bootstrap.min.css'
import './styles/button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Button = (props) => {
    const bg_color = {
        background: props.bg_clr,
        color: props.color
    }

    const text = "Submit" ;
    const [buttonText, setButtonText] = useState(text);

  useEffect(()=> {
    const timer = setTimeout(()=> {
       setButtonText(text);
    }, 1000);
    return ()=> clearTimeout(timer);
 }, [buttonText])

   return (
        // <div class="content">
        //     <button className={`btn-download btn-${props.size}`} 
        //     style={bg_color }
        //     name={props.name}
        //     disabled={props.disabled}
        //     onClick={props.handleClick}
        //     >{props.label}</button>
        //     <span class="btn-open">{props.loading_complete_label}</span>
        // </div>
        
      <button className={props.size}
        data-id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onClick={() => setButtonText("Loading")} style={bg_color }
        > {buttonText} {props.icon === "true" ? <FontAwesomeIcon className="icon-left" icon={faCoffee} /> : ""} 
      </button>



   )
}
export default Button;