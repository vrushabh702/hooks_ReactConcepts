//useEffect is a React hook that lets you run side effects in your components, like fetching data, updating the DOM, or setting up subscriptions. It runs after the component renders and can clean up resources when the component unmounts or before the effect runs again.

import React, {useEffect, useState} from "react";
import axios from 'axios'

function EffectTutorial(){

    const [data,setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(()=>{
        // console.log('Hello world');
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            // console.table(response.data)
            setData(response.data[0].email)
            console.error('Api called')
        });
    },[]);
    return (
        <div>
            <h1>Hello UseEffect </h1>
            <h1>{data}</h1>
            <h1>{count}$</h1>
            <button
                onClick={()=>{
                    setCount(count + 1);
                }}            
            > Click
            </button>
        </div>
    )
}
export default EffectTutorial;