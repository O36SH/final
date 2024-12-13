import { useState, useCallback } from 'react';
import { useRoomMessages } from './useRoomMessages';
import { useRoomMembers } from './useRoomMembers';

export function useRoom(roomId) {
  const [room, setRoom] = useState({
    id: roomId,
    name: "غرفة التقنية",
    description: "غرفة للنقاش حول أحدث التقنيات والتطورات التكنولوجية",
    owner: {
      id: "12345678",
      name: "أحمد",
      isOnline: true
    },
    members: [
      { id: "12345678", name: "أحمد", role: "admin", isOnline: true },
      { id: "23456789", name: "محمد", role: "moderator", isOnline: false },
      { id: "34567890", name: "سارة", role: "member", isOnline: true }
    ],
    isActive: true,
    createdAt: "2023-12-01"
  });

  const { messages, sendMessage } = useRoomMessages(roomId);
  const { updateMemberRole, kickMember } = useRoomMembers(roomId);

  const handleUpdateRole = useCallback((memberId, newRole) => {
    setRoom(prev => ({
      ...prev,
      members: prev.members.map(member =>
        member.id === memberId ? { ...member, role: newRole } : member
      )
    }));
    updateMemberRole(memberId, newRole);
  }, [updateMemberRole]);

  const handleKickMember = useCallback((memberId) => {
    setRoom(prev => ({
      ...prev,
      members: prev.members.filter(member => member.id !== memberId)
    }));
    kickMember(memberId);
  }, [kickMember]);

  return {
    room,
    messages,
    sendMessage,
    updateMemberRole: handleUpdateRole,
    kickMember: handleKickMember
  };
}