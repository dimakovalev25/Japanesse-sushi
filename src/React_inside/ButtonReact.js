import styles from './ButtonReact.module.css'

const ButtonReactInside = function (props) {
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