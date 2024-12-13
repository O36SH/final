import React from 'react';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { styles } from '../styles';

/**
 * مكون معلومات الغرفة
 * يعرض صورة الغرفة واسمها ووصفها
 */
function RoomInfo({ room }) {
  return (
    <div className={styles.info.container}>
      <div className={styles.info.image}>
        {room.image ? (
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <UserGroupIcon className="w-8 h-8 text-gray-400" />
        )}
      </div>
      
      <div>
        <h4 className={styles.info.title}>{room.name}</h4>
        <p className={styles.info.description}>{room.description}</p>
      </div>
    </div>
  );
}

export default RoomInfo;