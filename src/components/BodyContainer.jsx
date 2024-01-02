import { useState } from 'react'
import ChatBox from './ChatBox'
import JoinRoom from './JoinRoom'
import SignInPage from './SignInPage';

const BodyContainer = ({socket}) => {
  const [isSignedIn,setIsSignedIn]=useState(true);
  return (
    <div className="p-5" style={{height:'calc(100vh - 7rem)'}}>
    
       { !isSignedIn && (<SignInPage/>)}

       { isSignedIn && (<ChatBox socket={socket}/>)}
    </div>
  )
}

export default BodyContainer