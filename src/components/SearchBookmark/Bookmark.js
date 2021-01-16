import React from 'react';
import clsx from 'clsx';

function Bookmark({ bookmark, isHighlighted, ...props }) {
  return (
    <a
      href={bookmark.url}
      target="blank"
      className={clsx(
        'flex items-center rounded-md p-3 py-4 mb-2 cursor-pointer hover:ring transition-all',
        'bg-gray-100 hover:ring-green-500',
        'dark:bg-primary-light dark:hover:ring-secondary-dark dark:text-gray-300',
        { 'bg-green-500 text-white': isHighlighted },
        { 'dark:bg-secondary-dark dark:text-white': isHighlighted }
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
