import React from 'react';
import clsx from 'clsx';

function Footer() {
  return (
    <div
      className={clsx(
        'flex items-center justify-end px-6 text-xs',
        'text-gray-300',
        'dark:text-gray-600'
      )}
    >
      <span>
        <img className="w-4 h-4 mr-2" src="/icon.png" alt="icon" />
      </span>
      Powered by Linkes @ 2021
    </div>
  );
}

export default Footer;
