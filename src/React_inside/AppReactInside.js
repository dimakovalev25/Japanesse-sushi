import {useState, useCallback} from "react";
import styles from './AppReactInside.module.css'
import ButtonReactInside from "./ButtonReact";
import Output from "./Output";

const AppReactInside = function () {

    const [showParagraph, setShowParagraph] = useState(false);
    const [isToggling, setIsToggling] = useState(false);
    console.log('app')

    const toggleParagraph = useCallback(() => {
        if (isToggling) {
            setShowParagraph((prev) => !showParagraph);
        }
    }, [isToggling])

    const activateToggling = () => {
        setIsToggling(true)
    }

    return (
        <div className={styles.app}>
            <h1>React inside</h1>
            {showParagraph && <p>paragraph</p>}
            <Output isShow={showParagraph}/>
            <ButtonReactInside onClick={toggleParagraph}>click</ButtonReactInside>
            <ButtonReactInside onClick={activateToggling}>activate toggling</ButtonReactInside>
        </div>
    )

}
export default AppReactInside;
