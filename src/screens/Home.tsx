import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// المكونات
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import RoomsList from '../components/rooms/RoomsList';

// الخطافات
import { useTheme } from '../hooks/useTheme';
import { useRooms } from '../hooks/useRooms';

function Home() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { rooms, loading } = useRooms();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header />
      
      <View style={styles.content}>
        <RoomsList 
          rooms={rooms}
          loading={loading}
          onRoomPress={(roomId) => navigation.navigate('Room', { roomId })}
        />
      </View>

      <TabBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  }
});

export default Home;