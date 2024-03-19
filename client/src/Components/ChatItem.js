import styles from '../styles/styles.module.css'

function ChatItem(item) {
  return (
    <div className={`${styles.chatItem} ${item.item.fromMe ? styles.right : ''}`}>
        {item.item.message}
    </div>
  )
}

export default ChatItem