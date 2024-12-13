import { useState } from 'react';

/**
 * خطاف مخصص لإدارة نموذج تسجيل الدخول
 */
export function useLoginForm(onLogin) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await onLogin(formData);
    } catch (err) {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return {
    formData,
    error,
    handleSubmit,
    handleChange
  };
}