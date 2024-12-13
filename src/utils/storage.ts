import EncryptedStorage from 'react-native-encrypted-storage';

// خدمة التخزين المشفر
export const storage = {
  // حفظ البيانات
  async save(key: string, value: any) {
    try {
      await EncryptedStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('خطأ في حفظ البيانات:', error);
    }
  },

  // قراءة البيانات
  async load(key: string) {
    try {
      const value = await EncryptedStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('خطأ في قراءة البيانات:', error);
      return null;
    }
  },

  // حذف البيانات
  async remove(key: string) {
    try {
      await EncryptedStorage.removeItem(key);
    } catch (error) {
      console.error('خطأ في حذف البيانات:', error);
    }
  },

  // مسح جميع البيانات
  async clear() {
    try {
      await EncryptedStorage.clear();
    } catch (error) {
      console.error('خطأ في مسح البيانات:', error);
    }
  }
};