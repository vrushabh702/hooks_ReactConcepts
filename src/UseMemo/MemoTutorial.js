// The useMemo Hook in React is used to optimize performance by memoizing the result of a function. It recalculates the result only when its dependencies change, preventing unnecessary computations during re-renders.

import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export default function MemoTutorial(){
    const [data, setData] = useState(null);
    const [toggle,setToggle] = useState(false)

    useEffect(() =>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data)
        })
    },[])
    
    const findLongestName = (comments) =>{
        if(!comments) return null;

        let longestName = '';
        for(let i=0;i<comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }
        console.log('this was computed');
        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data])

    return (
        <div className="App">
            {/* <div>{findLongestName(data)}</div> */}
            <div>{getLongestName}</div>

            <button 
                onClick={() =>{
                    setToggle(!toggle);
                }}
            >
            {" "}
                Toggle
            </button>
            { toggle && <h1>toggle</h1> }
        </div>
    )
};
