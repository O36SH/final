import React from 'react';

/**
 * مكون زر الانضمام للغرفة
 */
function JoinButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 mt-4 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
    >
      انضمام
    </button>
  );
}

export default JoinButton;