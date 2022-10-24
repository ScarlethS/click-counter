import React from "react";
import '../stylessheets/Button.css';

/* Function button */
function Button({ text, isClickButton, handleClick}){
    return(
        <button 
            className={ isClickButton ? 'click-button' : 'init-button' }
            onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button;

