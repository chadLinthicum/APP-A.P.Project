// $(document).ready(function () {
//   setMainContentMarginTop();
// });

// window.onresize = setMainContentMarginTop;

let hamburger = document.getElementById("Hamburger");
let nav = document.getElementById("Nav");
let subscribeText = document.getElementById("Subscribe-Text");

function toggleNav() {
  nav.classList.toggle("popout-hide");
  nav.classList.toggle("popout-show");
  if (hamburger.src.includes("burger-off.png")) {
    hamburger.src = "assets/burger-on.png";
  } else {
    hamburger.src = "assets/burger-off.png";
  }
}

hamburger.addEventListener("click", function () {
  toggleNav();
});

document.querySelectorAll('a[href^="#"').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    toggleNav();
  });
});

// function setMainContentMarginTop() {
//   let headerHeight = document.getElementById("Header").offsetHeight;
//   let mainMarginTopPx = document.getElementById("Main");
//   mainMarginTopPx.style.marginTop = headerHeight + "px";
//   // console.log(headerHeight)
// }

//Adds a top spacing to anchor jumps
$(".nav-link").click(function () {
  let headerHeight = document.getElementById("Header").offsetHeight;
  let divId = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(divId).offset().top - headerHeight,
  });
});

subscribeText.value = "Hello, please subsribe me to your newsletter!";
