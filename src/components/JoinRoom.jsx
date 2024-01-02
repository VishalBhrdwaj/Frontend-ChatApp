import React, { useState } from 'react'

const JoinRoom = ({socket}) => {
    const [userName,setUserName]=useState("");
    const [roomId,setRoomId]=useState("");

    const joinRoom=()=>{
        if(userName!=="" && roomId!==""){
            socket.emit('join_room',{userName:userName,roomId:roomId})
        }
    }

  return (
    <div>
      
      <input onChange={(e)=>setUserName(e.target.value)} type='text' placeholder='Enter Your Name'/> <br /> <br />
      <input onChange={(e)=>setRoomId(e.target.value)} type='text' placeholder='Enter Your RoomId'/> <br /> <br />
      <button onClick={joinRoom}> Join Room</button>
    </div>
  )
}

export default JoinRoom
