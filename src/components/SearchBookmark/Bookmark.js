import React from 'react';
import clsx from 'clsx';

function Bookmark({ bookmark, isHighlighted, ...props }) {
  return (
    <a
      href={bookmark.url}
      target="blank"
      className={clsx(
        'flex items-center rounded-md p-3 py-4 mb-2 cursor-pointer transition-all',
        'bg-gray-100 hover:bg-green-500 hover:text-white',
        'dark:bg-primary-light dark:text-gray-300 dark:hover:bg-secondary-dark',
        { 'ring ring-green-500': isHighlighted },
        { 'ring dark:ring-secondary-dark': isHighlighted }
      )}
      {...props}
    >
      <span className="mr-5">
        <img
          src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${bookmark.url}`}
          alt="icon"
          className="h-4 w-4"
        ></img>
      </span>
      <span>{bookmark.title}</span>
    </a>
  );
}

export default Bookmark;
