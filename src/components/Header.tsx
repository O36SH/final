import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';
import Avatar from './Avatar';

function Header() {
  const { theme } = useTheme();
  const { user } = useAuth();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
      <TouchableOpacity>
        <Avatar user={user} size={40} />
      </TouchableOpacity>

      <Text style={[styles.title, { color: theme.colors.text }]}>
        عطش
      </Text>

      <TouchableOpacity>
        <Icon name="bell" size={24} color={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Header;