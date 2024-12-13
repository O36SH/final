import React from 'react';
import { styles } from '../styles';

/**
 * مكون حقل الإدخال في النموذج
 */
function FormInput({ type, name, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className={styles.input}
    />
  );
}

export default FormInput;