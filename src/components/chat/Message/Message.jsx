import React from 'react';
import { MessageContent, MessageMeta } from './components';
import { styles } from './styles';

/**
 * مكون الرسالة الفردية
 * يعرض محتوى الرسالة مع المعلومات الإضافية
 */
function Message({ message, isOwnMessage, recipient }) {
  return (
    <div className={styles.getContainerClass(isOwnMessage)}>
      <div className={styles.getContentClass(isOwnMessage)}>
        <MessageMeta
          sender={isOwnMessage ? 'أنت' : recipient.name}
          timestamp={message.timestamp}
          isOwnMessage={isOwnMessage}
        />
        <MessageContent
          content={message.content}
          type={message.type}
          isOwnMessage={isOwnMessage}
        />
      </div>
    </div>
  );
}

export default Message;