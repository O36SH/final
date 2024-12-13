import React from 'react';
import { useMessageList } from './hooks';
import { Message } from './components';
import { styles } from './styles';

/**
 * مكون قائمة الرسائل
 * يعرض الرسائل في المحادثة مع التمرير التلقائي
 */
function MessageList({ messages, currentUserId, recipient }) {
  const { messagesEndRef } = useMessageList(messages);

  return (
    <div className={styles.container}>
      <div className={styles.messagesList}>
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isOwnMessage={message.senderId === currentUserId}
            recipient={recipient}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default MessageList;