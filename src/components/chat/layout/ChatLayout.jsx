import React from 'react';

function ChatLayout({ header, voiceStage, messageList, input }) {
  return (
    <div className="h-screen flex flex-col">
      {header}
      {voiceStage}
      {messageList}
      {input}
    </div>
  );
}

export default ChatLayout;