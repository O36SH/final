import React from 'react';
import { PaperAirplaneIcon, PhotoIcon, PlusIcon } from '@heroicons/react/24/outline';
import { styles } from '../styles';

/**
 * مكون أزرار الإجراءات
 * يعرض أزرار الإرسال والصور والخيارات الإضافية
 */
function MessageActions({ showActions, hasContent }) {
  return (
    <div className={styles.actions}>
      {hasContent && (
        <button type="submit" className={styles.sendButton}>
          <PaperAirplaneIcon className="h-6 w-6" />
        </button>
      )}
      
      <button type="button" className={styles.actionButton}>
        <PhotoIcon className="h-6 w-6" />
      </button>

      <button 
        type="button"
        className={styles.actionButton}
      >
        <PlusIcon className={`h-6 w-6 ${showActions ? 'rotate-45' : ''}`} />
      </button>
    </div>
  );
}

export default MessageActions;