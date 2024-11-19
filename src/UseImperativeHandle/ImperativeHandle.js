// The useImperativeHandle Hook in React is used to customize the instance value that is exposed when using ref with a child component. It allows the parent to access specific functions or properties of the child, giving controlled access to its internal behavior

import React, { useRef } from "react";
import Button from "./Button";

function ImperativeHandle(){
    const buttonRef = useRef(null);
    return (
        <div>
            <button
                onClick={()=>{
                    buttonRef.current.alterToggle()
                }}
            >Button from Parrent</button>
            <Button ref={buttonRef}/>
            
        </div>
    )
}

export default ImperativeHandle;