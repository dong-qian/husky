import React, { useState } from 'react';
import {
  EscButton,
  Footer,
  SearchInput,
  Bookmarks,
  RecentHeader
} from '../components/SearchBookmark';
import { getRecentBookmarks, searchBookmarks, closeSearchModal } from '../api/chrome';
import Modal from '../components/Common/Modal';

const ESCAPE_KEY = 27;
const ARROW_UP = 38;
const ARROW_DOWN = 40;
const ENTER = 13;

const Search = () => {
  const [recentBookmarks, setRecentBookmarks] = React.useState([]);
  const [bookmarks, setBookmarks] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const myRecentBookmarksRef = React.useRef([]);
  const setMyRecentBookmarks = data => {
    myRecentBookmarksRef.current = data;
    setRecentBookmarks(data);
  };

  const myBookmarksRef = React.useRef([]);
  const setMyBookmarks = data => {
    myBookmarksRef.current = data;
    setBookmarks(data);
  };

  const mySelectedIndexRef = React.useRef(selectedIndex);
  const setMySelectedIndex = data => {
    mySelectedIndexRef.current = data;
    setSelectedIndex(data);
  };

  React.useEffect(async () => {
    const keydownListener = document.addEventListener('keydown', handleKeyDown);
    const bookmarks = await getRecentBookmarks();
    setMyRecentBookmarks(bookmarks);
    return () => document.removeEventListener('keydown', keydownListener);
  }, []);

  const handleSearch = async e => {
    setMySelectedIndex(0);
    const bookmarks = await searchBookmarks(e.target.value);
    if (bookmarks.length === 0) {
      setMyBookmarks(recentBookmarks);
    }
    setMyBookmarks(bookmarks);
  };

  const handleKeyDown = event => {
    if (event.keyCode === ESCAPE_KEY) {
      closeSearchModal();
    }

    if (event.keyCode === ARROW_DOWN) {
      if (myBookmarksRef.current.length > 0) {
        if (mySelectedIndexRef.current !== myBookmarksRef.current.length - 1) {
          setMySelectedIndex(mySelectedIndexRef.current + 1);
        }
      } else {
        if (mySelectedIndexRef.current !== 9) {
          setMySelectedIndex(mySelectedIndexRef.current + 1);
        }
      }

      const bookmark = document.getElementById(`search-bookmark-${mySelectedIndexRef.current}`);
      bookmark.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }

    if (event.keyCode === ARROW_UP) {
      if (mySelectedIndexRef.current !== 0) {
        setMySelectedIndex(mySelectedIndexRef.current - 1);
      }
      const bookmark = document.getElementById(`search-bookmark-${mySelectedIndexRef.current}`);
      bookmark.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }

    if (event.keyCode === ENTER) {
      closeSearchModal();
      if (myBookmarksRef.current.length > 0) {
        window.open(myBookmarksRef.current[mySelectedIndexRef.current].url);
      } else {
        window.open(myRecentBookmarksRef.current[mySelectedIndexRef.current].url);
      }
    }
  };

  const hasSearchResults = bookmarks.length > 0;

  return (
    <Modal overlayClass="p-vh-12" contentClass="max-w-3xl h-fit-content">
      <SearchInput handleSearch={handleSearch} />
      <EscButton closeSearchModal={closeSearchModal} />
      <div className="overflow-auto max-h-192 mb-5 p-6">
        {!hasSearchResults && <RecentHeader />}
        <Bookmarks
          results={hasSearchResults ? bookmarks : recentBookmarks}
          selectedIndex={selectedIndex}
          setSelectedIndex={index => setMySelectedIndex(index)}
        />
      </div>
      <Footer />
    </Modal>
  );
};

export default Search;
