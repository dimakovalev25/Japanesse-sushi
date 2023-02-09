import React from "react";
const Output = function (props) {

    console.log('toggle new Paragraph')
    return (
        <p>{props.isShow? 'new paragraph' : '' }</p>
    )

}
export default React.memo(Output);