import { useMemo } from 'react';

export function useRecipient(userId) {
  // In a real app, this would fetch user data from an API
  return useMemo(() => ({
    id: userId,
    name: "أحمد محمد",
    status: "متصل",
    bio: "مطور تطبيقات ومهتم بالتكنولوجيا"
  }), [userId]);
}