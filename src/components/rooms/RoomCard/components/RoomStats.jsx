import React from 'react';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { styles } from '../styles';

/**
 * مكون إحصائيات الغرفة
 * يعرض عدد الأعضاء وحالة النشاط
 */
function RoomStats({ room }) {
  return (
    <div className={styles.stats.container}>
      <UserGroupIcon className="w-4 h-4 text-gray-400" />
      <span className={styles.stats.text}>
        {room.members} عضو
      </span>
      <span className="mx-2 text-gray-400">•</span>
      <span className={`text-sm ${room.isActive ? 'text-green-500' : 'text-gray-500'}`}>
        {room.isActive ? 'نشطة' : 'غير نشطة'}
      </span>
    </div>
  );
}

export default RoomStats;