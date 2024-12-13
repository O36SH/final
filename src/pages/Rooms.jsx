import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from '../contexts/SettingsContext';
import RoomsHeader from '../components/rooms/RoomsHeader';
import RoomsList from '../components/rooms/RoomsList';
import RoomInfo from '../components/RoomInfo';
import CreateRoomModal from '../components/CreateRoomModal';
import RoomDiscoveryModal from '../components/RoomDiscoveryModal';
import { cn } from '../utils/styles';

function Rooms() {
  const navigate = useNavigate();
  const { settings } = useSettings();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [rooms, setRooms] = useState({
    private: [
      { 
        id: "1234567890", 
        name: "غرفة التقنية", 
        members: 150, 
        isActive: true,
        description: "غرفة للنقاش حول أحدث التقنيات والتطورات التكنولوجية",
        createdAt: "2023-12-01",
        owner: {
          id: "12345678",
          name: "أحمد",
          isOnline: true
        }
      },
      // ... other rooms
    ],
    public: [
      // ... public rooms
    ]
  });

  const currentUser = {
    id: "12345678",
    name: "أحمد محمد",
    avatar: null // Replace with actual avatar URL when available
  };

  const handleCreateRoom = (newRoom) => {
    setRooms(prev => ({
      ...prev,
      private: [newRoom, ...prev.private]
    }));
    setShowCreateRoom(false);
  };

  const handleJoinRoom = (roomId) => {
    navigate(`/rooms/${roomId}`);
    setShowDiscovery(false);
  };

  return (
    <div className={cn(
      'min-h-screen',
      settings.darkMode ? 'bg-gray-900' : 'bg-gray-50'
    )}>
      <RoomsHeader
        currentUser={currentUser}
        onCreateRoom={() => setShowCreateRoom(true)}
        onShowDiscovery={() => setShowDiscovery(true)}
      />

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <RoomsList
          title="خاص"
          rooms={rooms.private}
          onRoomClick={(roomId) => navigate(`/rooms/${roomId}`)}
          onRoomInfo={setSelectedRoom}
        />
        
        <RoomsList
          title="عام"
          rooms={rooms.public}
          onRoomClick={(roomId) => navigate(`/rooms/${roomId}`)}
          onRoomInfo={setSelectedRoom}
        />
      </div>

      {selectedRoom && (
        <RoomInfo
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}

      {showCreateRoom && (
        <CreateRoomModal
          onClose={() => setShowCreateRoom(false)}
          onCreateRoom={handleCreateRoom}
        />
      )}

      {showDiscovery && (
        <RoomDiscoveryModal
          onClose={() => setShowDiscovery(false)}
          onJoinRoom={handleJoinRoom}
        />
      )}
    </div>
  );
}

export default Rooms;