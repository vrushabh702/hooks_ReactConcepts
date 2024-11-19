// It works like useState but is useful when state transitions involve multiple steps or when the next state depends on the previous state. It uses a reducer function to determine how the state should update based on an action and returns the current state and a dispatch function to trigger updates.

// import React, { useState } from "react";
import React, { useReducer } from "react";

const reducer = (state,action) =>{
    switch(action.type){
        case "Increment":
            return {count : state.count + 1, showText: state.showText}
        case "toggleShowText":
            return {count: state.count, showText: !state.showText}
        default :
            return state
    }
};

const ReducerTutorial = () =>{

    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(true);

    const [state, dispatch] = useReducer(reducer,{count: 0,showText : true})

    return (
        <div>
            <div>
                {/* <h1>{count}</h1> */}
                <h1>{state.count}</h1>
            </div>

            <div>
                <button
                    onClick={()=>{
                        // setCount(count+1);       // if we want to alter value of state we don't 
                        // setShowText(!showText)   // we don't do like this
                        dispatch({type: "Increment"})
                        dispatch({type: "toggleShowText"})
                    }}
                >Click Here</button>
            </div>    

            <div>
                {state.showText && <a>even test</a>}
            </div>
        </div>
    )
}

export default ReducerTutorial;