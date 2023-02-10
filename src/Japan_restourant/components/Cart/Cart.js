import styles from './Cart.module.css'
import Modal from "../UI/Modal";
import {useContext, useRef, useState} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = function (props) {

    const [showPromoForm, setShowPromoForm] = useState(true)
    // console.log('promoForm')
    // console.log(showPromoForm)

    const amountInputRef = useRef();
    const setInputValue = (e) => {
        e.preventDefault();
        const inputAmount = amountInputRef.current.value;
        cartContext.addPromoCod(inputAmount);
        setShowPromoForm(false);

    }

    const cartContext = useContext(CartContext);
    const totalAmount = (Math.abs(cartContext.totalAmount).toFixed(2)) + ' $';
    const hasItems = cartContext.items.length > 0;

    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id);
    }

    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }

    const cartItems = (

        <ul className={styles['cart-items']}>
            {cartContext.items.map((item) => (<CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={addCartItemHandler.bind(null, item)}
                    onRemove={removeCartItemHandler.bind(null, item.id)}
                >{item.name}</CartItem>
            ))}
        </ul>
    );


    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span></span>
                <span>ALL {totalAmount}</span>
            </div>
            <div className={styles.actions}>

                { showPromoForm && <form onSubmit={setInputValue}>
                    <input ref={amountInputRef} className={styles.cartinput} placeholder={'Enter promo'}
                           type={'text'}></input>
                </form>}

                <button onClick={props.onHideCart} className={styles['button--alt']}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}

            </div>
            <div></div>

        </Modal>
    )

}
export default Cart;