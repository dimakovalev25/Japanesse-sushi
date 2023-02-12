import React, {useState, useEffect} from "react";
const useCounter = function (n) {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + n);
        }, 1000);

        return () => clearInterval(interval);
    }, [n]);
    return counter;
}

export default useCounter;