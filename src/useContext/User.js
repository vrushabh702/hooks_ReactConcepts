import React, { useContext } from "react";
import {AppContext} from './ContextTutorial'


// function User({username}){   // its a prop we are not going to use it
function User(){
   const {username} = useContext(AppContext)

   return (
       <div>
           <h1>User:  {username}</h1>
       </div>
   );
}


export default User;