/**
 * التحقق من صحة البريد الإلكتروني
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * التحقق من قوة كلمة المرور
 */
export function validatePassword(password) {
  return password.length >= 8;
}

/**
 * التحقق من تطابق كلمتي المرور
 */
export function validatePasswordMatch(password, confirmPassword) {
  return password === confirmPassword;
}