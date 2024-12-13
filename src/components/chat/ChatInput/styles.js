import { cn } from '../../../utils/styles';

/**
 * أنماط مكون إدخال الرسائل
 */
export const styles = {
  container: cn(
    'fixed bottom-0 left-0 right-0 z-40',
    'border-t pb-[env(safe-area-inset-bottom)]'
  ),
  
  form: 'px-4 py-3',
  
  inputContainer: 'flex items-center gap-2',
  
  actions: 'flex items-center gap-2',
  
  sendButton: cn(
    'p-2 rounded-full transition-all',
    'bg-blue-600 text-white hover:bg-blue-700'
  ),
  
  actionButton: cn(
    'p-2 rounded-full transition-colors',
    'hover:bg-gray-100 dark:hover:bg-gray-700',
    'text-gray-500 dark:text-gray-400'
  )
};