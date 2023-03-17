// $(document).ready(function () {
//   setMainContentMarginTop();
// });

// window.onresize = setMainContentMarginTop;

let hamburger = document.getElementById("Hamburger");
let nav = document.getElementById("Nav");

function toggleNav() {
  nav.classList.toggle("popout-hide");
  nav.classList.toggle("popout-show");
  if (hamburger.src.includes("eggNoHatch.webp")) {
    hamburger.src = "assets/eggHatch.gif";
  } else {
    hamburger.src = "assets/eggNoHatch.webp";
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
  var divId = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(divId).offset().top - headerHeight,
  });
});
