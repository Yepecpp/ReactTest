import React from 'react'
import axios from 'axios'; 
import { useState, useEffect } from 'react';
function Messages () {
const [messages, setMessages] = useState([]);
useEffect(() => {
async function setdata (){
    const req= await axios.get('http://186.7.57.113:1434/');
    setMessages(req.data);
    return req.data;
}
setdata();
},[]);
return (

   <>
   {messages.map((message) => (
       <div key={message.Id} className='Messages'>
        <h2>De {message.Sender} Para {message.Reciver}</h2>
       <h3>{message.MText}</h3>
       </div>
   )
)} </>
)
}

export default Messages
