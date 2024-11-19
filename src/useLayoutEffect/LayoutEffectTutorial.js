// The useLayoutEffect Hook in React is similar to useEffect, but it runs synchronously after all DOM mutations and before the browser paints the screen. It is used when you need to measure or modify the DOM immediately after updates, ensuring the UI stays consistent

import { useEffect, useLayoutEffect, useRef } from "react";

function LayoutEffectTutorial(){
    const inputRef = useRef(null)
    useLayoutEffect(()=>{
        // console.log('useLayoutEffect')
        console.log(inputRef.current.value,'inputRef');
    },[])

    useEffect(()=>{
        // console.log("useEffect")
        inputRef.current.value = "HELLO!!";
    },[])

    return (
        <div className="App">
            <input ref={inputRef} value="PEDRO" style={{width: 400, height: 50}}/>            
        </div>
    )
}

export default LayoutEffectTutorial

// change the layout of application before useEffect changes or actaully print out ot user