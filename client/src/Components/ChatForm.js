import { useState } from 'react';
import React from 'react';
import styles from '../styles/styles.module.css';
import sendMessage  from 'socket.io-client';
import {useChat} from '../Context/ChatContext';
function ChatForm() {
  const [message, setMessage] = useState("");
  const {setMessages} = useChat();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessages(  (prevMessages) => [...prevMessages, {message, fromMe: true}]);
    sendMessage(message);

    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={styles.textInput} value={message} onChange={(e)=>setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ChatForm