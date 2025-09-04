// Scroll-to-top button functionality
window.onscroll = function () {
  let btn = document.getElementById("scrollTopBtn");

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block"; // Show the button
  } else {
    btn.style.display = "none"; // Hide the button
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

