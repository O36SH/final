/**
 * توليد معرف فريد للغرفة
 * @returns {string} معرف الغرفة
 */
export function generateRoomId() {
  // توليد رقم عشوائي من 10 أرقام
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

/**
 * تنسيق معرف الغرفة للعرض
 * @param {string} id - معرف الغرفة
 * @returns {string} المعرف المنسق
 */
export function formatRoomId(id) {
  return `#${id}`;
}