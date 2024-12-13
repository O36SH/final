import { cn } from '../../../utils/styles';

/**
 * أنماط نموذج تسجيل الدخول
 */
export const styles = {
  form: 'space-y-6',
  
  input: cn(
    'w-full px-4 py-3 rounded-lg border',
    'focus:ring-2 focus:ring-blue-500',
    'dark:bg-gray-700 dark:border-gray-600 dark:text-white',
    'bg-white border-gray-300 text-gray-900'
  ),

  error: 'text-red-500 text-sm text-center',

  button: cn(
    'w-full py-3 px-4 rounded-lg',
    'bg-blue-600 hover:bg-blue-700',
    'text-white font-medium',
    'transition-colors'
  )
};