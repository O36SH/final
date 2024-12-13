import { cn } from '../../../utils/styles';

/**
 * أنماط بطاقة الغرفة
 */
export const styles = {
  container: cn(
    'p-4 rounded-lg border',
    'hover:shadow-lg transition-shadow',
    'dark:bg-gray-700 dark:border-gray-600',
    'bg-gray-50 border-gray-200'
  ),

  info: {
    container: 'flex items-start space-x-4',
    image: cn(
      'w-16 h-16 rounded-lg flex-shrink-0',
      'flex items-center justify-center',
      'dark:bg-gray-600 bg-gray-200'
    ),
    title: cn(
      'font-semibold',
      'dark:text-white text-gray-900'
    ),
    description: cn(
      'text-sm mt-1',
      'dark:text-gray-300 text-gray-600'
    )
  },

  stats: {
    container: 'flex items-center mt-4',
    text: cn(
      'text-sm',
      'dark:text-gray-400 text-gray-500'
    )
  }
};