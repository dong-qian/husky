import React from 'react';
import Bookmark from './Bookmark';

function Bookmarks({ results, selectedIndex }) {
  return (
    <div>
      {results?.map((bookmark, index) => (
        <Bookmark
          id={`search-bookmark-${index}`}
          key={bookmark.id}
          bookmark={bookmark}
          isHighlighted={selectedIndex === index}
        />
      ))}
    </div>
  );
}

export default Bookmarks;
