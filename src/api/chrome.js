/*global chrome*/

function getRecentBookmarks() {
  return new Promise(resolve => {
    chrome.bookmarks.getRecent(10, trees => resolve(trees));
  });
}

function searchBookmarks(searchText) {
  return new Promise(resolve => {
    chrome.bookmarks.search(searchText, results => resolve(results));
  });
}

function closeSearchModal() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'close-search-modal' });
  });
}

function openSearchPage() {
  chrome.tabs.create({
    url: chrome.extension.getURL('/index.html#popup')
  });
}

function useDarkTheme() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'use-dark-theme' });
  });
}

function useLightTheme() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'use-light-theme' });
  });
}

export {
  getRecentBookmarks,
  searchBookmarks,
  closeSearchModal,
  openSearchPage,
  useDarkTheme,
  useLightTheme
};
