import {useEffect} from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { useChat } from '../Context/ChatContext'
import { init, subscribeChat } from '../socketApi'


function Conteiner() {
  const {setMessages} = useChat();
  useEffect(() => {
    init()
    
    subscribeChat((message) => {
      setMessages((prevMessages) => [...prevMessages, {message}]);
    } 
    );
  }, [])
  return (
    <div className='App'>
        <ChatList />
        <ChatForm />
    </div>
  )
}

export default Conteiner