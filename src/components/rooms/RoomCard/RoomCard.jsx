import React from 'react';
import { useRoomCard } from './hooks';
import { RoomInfo, RoomStats, JoinButton } from './components';
import { styles } from './styles';

/**
 * مكون بطاقة الغرفة
 * يعرض معلومات الغرفة في شكل بطاقة
 */
function RoomCard({ room, onJoin }) {
  const { handleJoinClick } = useRoomCard(onJoin, room.id);

  return (
    <div className={styles.container}>
      <RoomInfo room={room} />
      <RoomStats room={room} />
      <JoinButton onClick={handleJoinClick} />
    </div>
  );
}

export default RoomCard;