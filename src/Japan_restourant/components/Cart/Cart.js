import styles from './Cart.module.css'
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = function (props) {


    const cartContext = useContext(CartContext);
    const totalAmount = cartContext.totalAmount.toFixed(2)+' $';
    const hasItems = cartContext.items.length > 0;

    const removeCartItemHandler = (id) => {

    }
    const addCartItemHandler = (item) => {

    }

    const cartItems = (

        <ul className={styles['cart-items']}>
            {cartContext.items.map((item)=> (<CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={addCartItemHandler.bind(null, item)}
                    onRemove={removeCartItemHandler.bind(null,item.id)}
                >{item.name}</CartItem>
            ))}
        </ul>
    );

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
        <div className={styles.total}>
            <span></span>
            <span>ALL  {totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button onClick={props.onHideCart} className={styles['button--alt']}>Close</button>
            {hasItems && <button className={styles.button}>Order</button>}

        </div>
        <div></div>

        </Modal>
    )

}
export default Cart;