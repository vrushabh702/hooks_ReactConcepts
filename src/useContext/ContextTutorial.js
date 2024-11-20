// The useContext Hook in React is used to access the value of a context directly in a component. It allows you to share data like themes, authentication status, or any global state across components without passing props manually at every level.


import React, { useState , createContext} from "react";
import Login from "./Login";
import User from "./User";


export const AppContext = createContext(null)


function ContextTutorial(){
   const [username,setUsername] = useState("");
  
   return(
       <div>
           {/* remove props we not gona need props its difficut not likely to with multiple data */}
           {/* <Login setUsername={setUsername}/> <User username={username}/> */}
           <AppContext.Provider value={{username, setUsername}}>
               <Login/> <User/>
           </AppContext.Provider>


       </div>
   )
}  


export default ContextTutorial