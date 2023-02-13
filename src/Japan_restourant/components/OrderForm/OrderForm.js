import React, {useState, useRef, useEffect} from "react";
import useHttp from '../../hooks/use-http'

import styles from './OrderForm.module.css'

const OrderForm = function ({cartOrder}) {
    // console.log(cartOrder)

    const httpRequestData = useHttp();
    const {isLoading, error, sendHttpRequest} = httpRequestData;

    const [orderUserInfo, setOrderUserInfo] = useState({
        name: '',
        address: '',
        tel: '',
        email: '',
    });
    const [isShowOrderProof, setIsShowOrderProof] = useState(false);
    const [enteredName, setEnteredName] = useState('');

    console.log(enteredName)

    const nameInputchangeHandler = (e) => {
        setEnteredName(e.target.value);
    }

    const mainOrder = {...cartOrder, orderUserInfo}
    // console.log(mainOrder)

    const nameRef = useRef()
    const addressRef = useRef()
    const telRef = useRef()
    const emailRef = useRef()

    const OrderFormSubmit = (e) => {
        e.preventDefault();

        const nameValue = nameRef.current.value;
        const addressValue = addressRef.current.value;
        const telValue = telRef.current.value;
        const emailValue = emailRef.current.value;

        if(nameValue.trim() !== '' && addressValue.trim() !== '' && telValue.trim() !== '' && emailValue.trim() !== ''){
            setOrderUserInfo({
                name: nameValue,
                address: addressValue,
                tel: telValue,
                email: emailValue
            })
            setIsShowOrderProof(true)


            // bad practice
            nameRef.current.value='';
            addressRef.current.value='';
            telRef.current.value='';
            emailRef.current.value='';

            enterProductHandler(mainOrder)
        }

    }


    const enterProductHandler = async (mainOrder) => {
        try {
            const response = await fetch(
                "https://react-course-86712-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
                {
                    method: "POST",
                    body: JSON.stringify(mainOrder),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Error sending orders");
            }

        } catch (e) {
            console.log(e.message);
        }
    };

    // useEffect(() => {
    //     sendHttpRequest({
    //         url: 'https://react-course-86712-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
    //         method: 'POST',
    //         headers: mainOrder
    //     })
    //
    // }, [orderUserInfo])

    return (
        <form onSubmit={OrderFormSubmit} className={styles.orderForm}>
            <input onChange={nameInputchangeHandler} ref={nameRef} placeholder={'Enter your name'} type={'text'}/>
            <input ref={addressRef} placeholder={'Enter address'} type={'text'}/>
            <input ref={telRef} placeholder={'Enter phone number'} type={'tel'}/>
            <input ref={emailRef} placeholder={'Enter e-mail'} type={'email'}/>
            <button>Send</button>
            {isShowOrderProof ? <p>Data has been sent, expect a manager to call</p> : ''}
        </form>
    )

}
export default OrderForm;
