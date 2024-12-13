/**
 * توليد معرف فريد للمستخدم
 * @returns {string} معرف المستخدم
 */
export function generateUserId() {
  // توليد رقم عشوائي من 8 أرقام
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

/**
 * تنسيق معرف المستخدم للعرض
 * @param {string} id - معرف المستخدم
 * @returns {string} المعرف المنسق
 */
export function formatUserId(id) {
  return `#${id}`;
}