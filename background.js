/*global chrome*/

/*
 * This file includes all background scripts running while the extension
 * is active. React code should not be placed here.
 */

chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (command === 'toggle-search-modal') {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle-search-modal' });
    }

    if (command === 'toggle-bookmarks-modal') {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle-bookmarks-modal' });
    }
  });
});
