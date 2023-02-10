import React from "react";
const Output = function (props) {

    console.log('output')
    return (
        <p>{props.isShow? 'new paragraph' : '' }</p>
    )

}
export default React.memo(Output);