export const MessageType = {
  TEXT: 'text',
  IMAGE: 'image',
  AUDIO: 'audio',
  VIDEO: 'video',
  FILE: 'file'
};

export const MessageStatus = {
  SENDING: 'sending',
  SENT: 'sent',
  DELIVERED: 'delivered',
  READ: 'read',
  FAILED: 'failed'
};

export function normalizeMessage(message) {
  // Ensure message has the correct structure
  if (typeof message === 'string') {
    return {
      type: MessageType.TEXT,
      content: message
    };
  }

  if (typeof message === 'object' && !message.type) {
    return {
      type: MessageType.TEXT,
      content: message.content || message.toString()
    };
  }

  return message;
}