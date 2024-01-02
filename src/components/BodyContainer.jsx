import { useState } from 'react'
import ChatBox from './ChatBox'
import SignInPage from './SignInPage';

const BodyContainer = ({socket}) => {
  const [isSignedIn,setIsSignedIn]=useState(false);
  return (
    <div className="p-5" style={{height:'calc(100vh - 7rem)'}}>
    
       { !isSignedIn && (<SignInPage socket={socket} setIsSignedIn={setIsSignedIn}/>)}

       { isSignedIn && (<ChatBox socket={socket}/>)}
    </div>
  )
}

export default BodyContainer