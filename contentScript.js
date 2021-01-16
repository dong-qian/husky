
/*global chrome*/
const iframe = document.createElement('iframe');
iframe.style.display = 'none';
iframe.style.height = '100%';
iframe.style.width = '100%';
iframe.style.position = 'fixed';
iframe.style.border = '0px';
iframe.style.top = '0px';
iframe.style.right = '0px';
iframe.style.zIndex = '999';
iframe.style.overflow = 'hidden';
iframe.style.marginwidth = '0px';
iframe.style.marginheight = '0px';


document.body.appendChild(iframe);


chrome.runtime.onMessage.addListener(function (request) {
  console.log("called in content")
  if (request.action === 'toggle-search-modal') {
    toggleSearchModal();
  }

  if (request.action === 'close-search-modal') {
    closeSearchModal();
  }

  // if (request.action === 'toggle-bookmarks-modal') {
  //   toggleHomeModal();
  // }

  // if (request.action === 'close-bookmarks-modal') {
  //   closeHomeModal();
  // }

  // if (request.action === 'use-dark-theme') {
  //   console.log('called');

  //   useDarkTheme();
  // }
});

/** Search Modal */
function openSearchModal() {
  iframe.src = chrome.extension.getURL('index.html#search');
  iframe.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeSearchModal() {
  iframe.src = null;
  iframe.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function toggleSearchModal() {
  if (iframe.style.display === 'block') {
    closeSearchModal();
  } else {
    openSearchModal();
  }
}

/** End Search Modal */

/** Home Modal */

// function openHomeModal() {
//   iframe.src = chrome.extension.getURL('index.html#home');
//   iframe.style.display = 'block';
//   document.body.style.overflow = 'hidden';
// }

// function closeHomeModal() {
//   iframe.src = chrome.extension.getURL('index.html#empty');
//   iframe.style.display = 'none';
//   document.body.style.overflow = 'auto';
// }

// function toggleHomeModal() {
//   if (iframe.style.display === 'block') {
//     closeHomeModal();
//   } else {
//     openHomeModal();
//   }
// }

// function useDarkTheme() {
//   localStorage.theme = 'dark';
//   console.log(iframe.contentWindow.document.getElementsByTagName());
//   // const html = iframe.contentWindow.document.getElementsByTagName('html');
//   // html.classList.add('dark');
// }

/** End Home Modal */

// listenOnCommand();

// function listenOnCommand() {
//   document.addEventListener('keydown', e => {
//     if ((e.code = 'ControlLeft' && e.code === 'BracketRight')) {
//       toggleSearchModal();
//     }
//   });
// }
