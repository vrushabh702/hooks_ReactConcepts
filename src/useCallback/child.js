import { useEffect } from "react";

function Child({returnComment}){
    useEffect(()=>{
        console.log("function was called");
    },[returnComment])
    return (
        <div>
            {returnComment()}
        </div>
    )
}

export default Child