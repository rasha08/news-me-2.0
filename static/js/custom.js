// document.addEventListener('DOMContentLoaded', populateImages, false )
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    [].forEach.call(document.getElementsByTagName("img"), element => {
      element.setAttribute("src", element.getAttribute("data-src"))
    });
  }, 500);
}, false);
  