import React from 'react';
import { useLoginForm } from './hooks';
import { FormInput, FormButton } from './components';
import { styles } from './styles';

/**
 * مكون نموذج تسجيل الدخول
 */
function LoginForm({ onLogin }) {
  const { 
    formData,
    error,
    handleSubmit,
    handleChange 
  } = useLoginForm(onLogin);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormInput
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="البريد الإلكتروني"
      />

      <FormInput
        type="password" 
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="كلمة المرور"
      />

      {error && (
        <p className={styles.error}>{error}</p>
      )}

      <FormButton>تسجيل الدخول</FormButton>
    </form>
  );
}

export default LoginForm;