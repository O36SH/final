import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/styles';

function Button({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  loading = false,
  ...props 
}) {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-700'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        'rounded-lg font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        variants[variant],
        sizes[size],
        loading && 'opacity-75 cursor-not-allowed',
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
}

export default Button;