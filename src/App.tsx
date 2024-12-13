import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// مكونات الشاشات
import Home from './screens/Home';
import Chat from './screens/Chat';
import Room from './screens/Room';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';

// مزودي السياق
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AuthProvider>
          <ThemeProvider>
            <NotificationProvider>
              <NavigationContainer>
                <Stack.Navigator 
                  screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right'
                  }}
                >
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Register" component={Register} />
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Chat" component={Chat} />
                  <Stack.Screen name="Room" component={Room} />
                  <Stack.Screen name="Profile" component={Profile} />
                  <Stack.Screen name="Settings" component={Settings} />
                </Stack.Navigator>
              </NavigationContainer>
            </NotificationProvider>
          </ThemeProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;