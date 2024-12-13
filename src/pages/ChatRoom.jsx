import React from 'react';
import { useParams } from 'react-router-dom';
import { useRoom } from '../hooks/useRoom';
import { CURRENT_USER_ID } from '../utils/constants';
import PageContainer from '../components/PageContainer';
import ChatLayout from '../components/chat/layout/ChatLayout';
import RoomHeader from '../components/room/header/RoomHeader';
import RoomMessageList from '../components/room/message/RoomMessageList';
import ChatInput from '../components/chat/ChatInput';

function ChatRoom() {
  const { roomId } = useParams();
  const { room, messages, sendMessage, updateMemberRole, kickMember } = useRoom(roomId);

  if (!room) return null;

  const isRoomOwner = room.owner.id === CURRENT_USER_ID;

  return (
    <PageContainer>
      <ChatLayout
        header={
          <RoomHeader
            room={room}
            isOwner={isRoomOwner}
            onUpdateRole={updateMemberRole}
            onKickMember={kickMember}
          />
        }
        messageList={
          <RoomMessageList
            messages={messages}
            currentUserId={CURRENT_USER_ID}
            members={room.members}
          />
        }
        input={
          <ChatInput 
            onSendMessage={(content) => sendMessage(content)} 
          />
        }
      />
    </PageContainer>
  );
}

export default ChatRoom;