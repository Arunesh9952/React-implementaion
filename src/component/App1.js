import React from "react";
import UserProfile from "./UserProfile";
import { UserAge, UserName } from "./UserCom";
import UserAge1 from "./UserDetails";

function App1(){
    return(
        <div className="App1">
          <UserName/>
          <UserAge/>
          <UserAge1/>
        </div>
    )


    
}
export default App1;