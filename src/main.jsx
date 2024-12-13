import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from './contexts/AuthContext'
import { SettingsProvider } from './contexts/SettingsContext'
import { ChatProvider } from './contexts/ChatContext'
import { PostProvider } from './contexts/PostContext'
import { NotificationProvider } from './contexts/NotificationContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SettingsProvider>
        <NotificationProvider>
          <ChatProvider>
            <PostProvider>
              <App />
            </PostProvider>
          </ChatProvider>
        </NotificationProvider>
      </SettingsProvider>
    </AuthProvider>
  </React.StrictMode>,
)