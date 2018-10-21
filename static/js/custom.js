// document.addEventListener('DOMContentLoaded', populateImages, false )
document.addEventListener(
  'DOMContentLoaded',
  function() {
    LoadImages();
  },
  false
);

window.LoadImages = function() {
  console.log('LOADING IMAGES');
  setTimeout(() => {
    [].forEach.call(document.getElementsByTagName('img'), element => {
      element.setAttribute('src', element.getAttribute('data-src'));
    });
  }, 100);
};
