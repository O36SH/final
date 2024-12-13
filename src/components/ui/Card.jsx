import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/styles';

function Card({ children, className, hover = true, glass = false }) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        'rounded-xl shadow-lg overflow-hidden',
        glass ? 'glass' : 'bg-white dark:bg-gray-800',
        'border border-gray-200 dark:border-gray-700',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export default Card;