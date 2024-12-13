import { cn } from '../../../utils/styles';

/**
 * أنماط قائمة الرسائل
 */
export const styles = {
  container: cn(
    'flex-1 overflow-y-auto',
    'mt-16 mb-16' // مساحة للهيدر والفوتر
  ),

  messagesList: cn(
    'max-w-screen-xl mx-auto',
    'px-4 py-4'
  )
};