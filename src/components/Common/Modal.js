import React from 'react';
import clsx from 'clsx';

function Modal({ children, overlayClass, contentClass }) {
  return (
    <div
      className={clsx(
        'modal relative h-screen w-screen bg-black bg-opacity-50 flex justify-center',
        overlayClass
      )}
    >
      <div
        className={clsx(
          'relative w-full mx-auto h-auto shadow-2xl pb-6 z-max rounded-2xl',
          'bg-white',
          'dark:bg-primary-dark',
          contentClass
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
