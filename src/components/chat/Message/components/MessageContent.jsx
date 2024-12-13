import React from 'react';
import { TextContent, ImageContent } from './content-types';
import { styles } from '../styles';

/**
 * مكون محتوى الرسالة
 * يعرض المحتوى حسب نوع الرسالة
 */
function MessageContent({ content, type, isOwnMessage }) {
  const getContent = () => {
    switch (type) {
      case 'image':
        return <ImageContent content={content} />;
      case 'text':
      default:
        return <TextContent content={content} />;
    }
  };

  return (
    <div className={styles.getMessageClass(isOwnMessage)}>
      {getContent()}
    </div>
  );
}

export default MessageContent;