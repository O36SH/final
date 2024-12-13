import React from 'react';
import { useChatInput } from './hooks';
import { MessageActions, TextInput, ImagePreview } from './components';
import { styles } from './styles';

/**
 * مكون إدخال الرسائل
 * يتيح للمستخدم إرسال النصوص والصور
 */
function ChatInput({ onSendMessage }) {
  const {
    message,
    selectedImage,
    showActions,
    handleSubmit,
    handleImageSelect,
    handleRemoveImage
  } = useChatInput(onSendMessage);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {selectedImage && (
          <ImagePreview 
            image={selectedImage}
            onRemove={handleRemoveImage}
          />
        )}
        
        <div className={styles.inputContainer}>
          <TextInput
            message={message}
            onImageSelect={handleImageSelect}
          />
          <MessageActions 
            showActions={showActions}
            hasContent={message.trim() || selectedImage}
          />
        </div>
      </form>
    </div>
  );
}

export default ChatInput;