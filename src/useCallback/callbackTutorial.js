// The useCallback Hook in React is used to memoize a function. It ensures that the same function instance is returned between renders unless its dependencies change, which helps in preventing unnecessary re-creations of the function and improves performance, especially when passing callbacks to child components.

import { useCallback, useState } from "react";
import Child from "./child";

export default function CallBackTutorial(){
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState('Yo, U gona be rich & travel world')
    // const returnComment =  () =>{      // we don't want state cans render child mulitple time
    //     return data;
    // }

    const returnComment = useCallback(
        (name) => {
            return data + name;
        },
        [data]
    );

    return (
        <div className="App">
            <Child returnComment={returnComment}/>
        <button
            onClick={()=>{
                setToggle(!toggle)
            }}
        >
            {" "}
            Toggle
        </button>
        {toggle && <h1>Toggle </h1>}
        </div>
    );
    
}