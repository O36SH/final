import React from 'react';
import { styles } from '../styles';

/**
 * مكون زر النموذج
 */
function FormButton({ children }) {
  return (
    <button type="submit" className={styles.button}>
      {children}
    </button>
  );
}

export default FormButton;