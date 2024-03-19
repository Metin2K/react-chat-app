import React from 'react'
import styles from '../styles/styles.module.css'
import { useChat } from '../Context/ChatContext' 
import ChatItem from './ChatItem';
function ChatList() {
  const { messages } = useChat();
  return (
    <div className={styles.chatlist}>
        <div>
       { messages.map((item, index) => (<ChatItem key={index} item={item} />))}
       </div>
    </div>
  )
}

export default ChatList;