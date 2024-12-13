/**
 * خطاف مخصص لإدارة بطاقة الغرفة
 */
export function useRoomCard(onJoin, roomId) {
  const handleJoinClick = () => {
    onJoin(roomId);
  };

  return { handleJoinClick };
}