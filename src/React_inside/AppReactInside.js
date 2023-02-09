import {useState} from "react";
import styles from'./AppReactInside.module.css'
import ButtonReactInside from "./ButtonReact";
import Output from "./Output";

const AppReactInside = function () {

    const [showParagraph, setShowParagraph] = useState(true);
    console.log('toggleParagraph')

    const toggleParagraph = function () {
        setShowParagraph(prev => !showParagraph);
    }


    return (
        <div className={styles.app}>
            <h1>React inside</h1>
            {showParagraph && <p>paragraph</p>}
            <Output isShow={false}/>
            <ButtonReactInside onClick={toggleParagraph}>click</ButtonReactInside>
        </div>
    )

}
export default AppReactInside;
