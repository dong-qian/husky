import clsx from 'clsx';
import React from 'react';

function EscButton({ closeSearchModal }) {
  return (
    <button
      className={clsx(
        'border px-2 py-1 absolute right-6 top-10 rounded text-sm border-gray-300 transition-all',
        'hover:border-green-500',
        'dark:text-gray-300 dark:hover:border-secondary-dark'
      )}
      onClick={closeSearchModal}
    >
      esc
    </button>
  );
}

export default EscButton;
