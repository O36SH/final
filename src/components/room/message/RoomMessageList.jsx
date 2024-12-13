import React from 'react';
import MessageList from '../../chat/message/MessageList';

function RoomMessageList({ messages, currentUserId, members }) {
  const getMemberById = (memberId) => {
    return members.find(member => member.id === memberId) || {
      id: memberId,
      name: 'عضو سابق'
    };
  };

  return (
    <MessageList
      messages={messages}
      currentUserId={currentUserId}
      recipient={getMemberById}
    />
  );
}

export default RoomMessageList;