import styles from './AddJoke.module.css'
import React, {useRef} from "react";

const AddJoke = function (props) {

    const setupRef = useRef('');
    const punchlineRef = useRef('');

    function submitHandler(e) {
        e.preventDefault();
        const joke = {
            id: Math.random().toFixed(3),
            type: 'generel',
            setup: setupRef.current.value,
            punchline: punchlineRef.current.value,
        }
        // console.log(joke)
        props.onAddJoke(joke)
        setupRef.current.value='';
        punchlineRef.current.value='';
    }


    return (
        <form onSubmit={submitHandler}>
            <div className={styles.control}>
                <label htmlFor={'setup'}>setup</label>
                <textarea rows={4} ref={setupRef} id={'setup'} type={'text'}></textarea>
            </div>
            <div className={styles.control}>
                <label htmlFor={'punchline'}>punchline</label>
                <textarea rows={4} id={'punchline'} type={'text'} ref={punchlineRef}></textarea>
            </div>
            <button>ADD Joke)</button>
        </form>
    )

}
export default AddJoke;