import React from 'react';
import { useParams } from 'react-router-dom';
import { useSettings } from '../contexts/SettingsContext';
import { useChat } from '../contexts/ChatContext';
import { useRecipient } from '../hooks/useRecipient';
import { CURRENT_USER_ID } from '../utils/constants';
import PageContainer from '../components/PageContainer';
import ChatLayout from '../components/chat/layout/ChatLayout';
import ChatHeader from '../components/chat/header/ChatHeader';
import MessageList from '../components/chat/message/MessageList';
import ChatInput from '../components/chat/ChatInput';

function DirectChat() {
  const { userId } = useParams();
  const { directMessages, sendDirectMessage } = useChat();
  const recipient = useRecipient(userId);
  const messages = directMessages[userId] || [];

  return (
    <PageContainer>
      <ChatLayout
        header={<ChatHeader user={recipient} />}
        messageList={
          <MessageList
            messages={messages}
            currentUserId={CURRENT_USER_ID}
            recipient={recipient}
          />
        }
        input={
          <ChatInput 
            onSendMessage={(content) => sendDirectMessage(userId, content)} 
          />
        }
      />
    </PageContainer>
  );
}

export default DirectChat;