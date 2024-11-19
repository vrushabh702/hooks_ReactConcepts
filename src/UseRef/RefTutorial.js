// The useRef Hook in React is used to create a persistent reference that doesn't re-render the component when its value changes. It is commonly used for accessing DOM elements directly or for persisting values across renders without causing re-renders.

import React,{useRef} from "react";

function RefTutorial(){
    // document.getElementById // you don't need to do this coz react provide virtual DOM
    const inputRef = useRef(null)
    const onClick = () =>{
        // console.log(inputRef.current.value)
        // inputRef.current.focus()
        inputRef.current.value = "";
    }
    return ( 
    <div>
        <h1>Pedro</h1>
        <input type="text" placeholder="Ex... " ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
    </div> 
    )
}

export default RefTutorial;