import { useEffect, useState } from "react"
import SingleMessage from "./SingleMessage";
import { FiSend } from "react-icons/fi";

const ChatBox = ({socket}) => {
  console.log(name);
  const [mainMessage,setMainMessage]=useState("");

  const addMessageToMessageBox=(messageContent,userType)=>{
    var mesgContainer= document.querySelector(".mesg-class");
    var mesgOuterContainer=document.createElement("div");
    mesgOuterContainer.classList.add("mesg-cont")
    var message=document.createElement("div");
    message.innerHTML=messageContent;
      if('sender'===userType.toLowerCase()){
        message.classList.add('single-mesg-send');
        mesgOuterContainer.classList.add("sender");
      }
      else{
        message.classList.add('single-mesg-recieve');
      }
      mesgOuterContainer.appendChild(message);
      mesgContainer.append(mesgOuterContainer);
      mesgContainer.scrollTop=mesgContainer.scrollHeight;
  }
  const sendMessage=(e)=>{
      e.preventDefault();
      addMessageToMessageBox(mainMessage,'sender');
      var mesg=mainMessage;
      setMainMessage("");
      socket.emit('send_message',mesg);
  }
  useEffect(()=>{
    socket.on("connect",()=>{
      var mesgContainer= document.querySelector(".mesg-class");
      var mesgOuterContainer=document.createElement("div");
      mesgOuterContainer.classList.add("mesg-cont");
      mesgOuterContainer.classList.add("new-user-joined");
      var message=document.createElement("div");
      message.innerHTML=`${name} has joined the chat`;
      message.classList.add("joined-user")
      mesgOuterContainer.appendChild(message);
      mesgContainer.appendChild(mesgOuterContainer);

    })

    socket.on('recieve_message',(data)=>{
      addMessageToMessageBox(data,'reciever')
    })
    return ()=>{
      socket.off();
    }

  },[socket])
  
  return (  
    <>
    {/* <div className="p-5" style={{height:'calc(100vh - 7rem)'}}> */}
      <div className="mesg-class border border-violet-400  h-[80%] overflow-scroll ">
      
      </div>
     <div className="border h-[20%] border-violet-500 flex items-center">
     <form className="w-[100%] pl-2 rounded-sm" >
        <input onChange={(e)=>setMainMessage(e.target.value)} className="border border-violet-500 w-[70%] mr-4 outline-none p-1" type='text' />
        <button onClick={(e)=>sendMessage(e)} className="bg-gradient-to-b from-violet-400 to-violet-600 font-semibold pr-6 pl-6 pt-1 pb-1 rounded-sm cursor-pointer text-white">Send <div className="inline-block"><FiSend /></div></button>
      </form>
     </div>
    {/* </div> */}
    </>
  )
}

export default ChatBox