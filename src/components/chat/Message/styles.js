import { cn } from '../../../utils/styles';

/**
 * أنماط مكونات الرسائل
 */
export const styles = {
  getContainerClass: (isOwnMessage) => cn(
    'flex mb-4',
    isOwnMessage ? 'justify-end' : 'justify-start'
  ),

  getContentClass: (isOwnMessage) => cn(
    'flex flex-col max-w-[70%]',
    isOwnMessage ? 'items-end' : 'items-start'
  ),

  getMessageClass: (isOwnMessage) => cn(
    'rounded-lg px-4 py-2',
    isOwnMessage
      ? 'bg-blue-600 text-white'
      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
  ),

  meta: cn(
    'flex items-center space-x-2',
    'text-xs text-gray-500 dark:text-gray-400'
  )
};