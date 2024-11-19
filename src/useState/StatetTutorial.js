// The useState hook in React is used to store values in the state, and you cannot directly display the state itself. Instead, you access and display the value stored in the state.

import React, {useState} from "react";

const StateTutorial = () =>{
    // let counter = 0;
    const [counter, setCounter] = useState(0); 
    const increment = () =>{
        // counter = counter + 1;
        setCounter(counter  + 1)
    }

    const [inputValue, setInputValue] = useState("pedro")
    let onChange = (event) => {
        const newValue = event.target.value;
        // inputValue = newValue
        setInputValue(newValue)
    };
 
    return (
        <div>
             {counter} $
            <div>
               <button onClick={increment}>Increment</button>
            </div>
            <br/>
            <br/>
            <div>
                <input placeholder="Enter something..." onChange={onChange}/>
                <br></br>
                {inputValue}
            </div>
        </div>

     
    )
}
export default StateTutorial