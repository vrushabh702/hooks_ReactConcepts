import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props,ref) => {
    const [toggle,setToggle] = useState(false);

    useImperativeHandle(ref, ()=>({
        alterToggle(){
            setToggle(!toggle);
        },
    }));
    return (
        <>
            <button
                // onClick={()=>{
                //     setToggle(!toggle);
                // }}            
            >Button From Child
            </button>
            <br></br>
            {toggle && <span>Toggle Child</span>}
        </>
    );
});

export default Button;