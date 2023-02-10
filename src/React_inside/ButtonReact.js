import styles from './ButtonReact.module.css'
import React from "react";

const ButtonReactInside = function (props) {
    console.log('button')
    return (
        <button
            type={props.type || 'button'}
            className={`${styles.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >{props.children}</button>
    )

}
export default ButtonReactInside;