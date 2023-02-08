import styles from './Cart.module.css'
import Modal from "../UI/Modal";

const Cart = function (props) {

    const cartItems = (
        <ul className={styles['cart-items']}>
            {[{id: 'm1', name: 'sushi', amount: 2, price: 39}].map((item)=> (<li>{item.name}</li>
            ))}
        </ul>
    )

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
        <div className={styles.total}>
            <span>ALL</span>
            <span>39.99</span>
        </div>
        <div className={styles.actions}>
            <button onClick={props.onHideCart} className={styles['button--alt']}>Close</button>
            <button className={styles.button}>Order</button>
        </div>
        <div></div>

        </Modal>
    )

}
export default Cart;