import CartContext from "../../store/cart-context";
import { useContext} from "react";

import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css'



export const HeaderCartButton = function (props) {
    const cartContext = useContext(CartContext)

    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount
    },0)


    return (
        <button onClick={props.onClick} className={styles.button}>
            <span className={styles.icon}><CartIcon/></span>
            <span>Cart</span>
            <span className={styles.badge}>{cartItemsNumber}</span>
        </button>
    )
}