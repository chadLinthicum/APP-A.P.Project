// $(document).ready(function () {

//   setMainContentMarginTop();

// });

// window.onresize = setMainContentMarginTop;

let hamburger = document.getElementById("Hamburger");

let nav = document.getElementById("Nav");

// let subscribeText = document.getElementById("Subscribe-Text");

function toggleNav() {
  nav.classList.toggle("popout-hide");

  nav.classList.toggle("popout-show");

  if (hamburger.src.includes("burger-off.webp")) {
    hamburger.src = "assets/burger-on.webp";
  } else {
    hamburger.src = "assets/burger-off.webp";
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

// subscribeText.value = "Hello, please subscribe me to your newsletter!";
strikethroughPastTourDates();
function strikethroughPastTourDates() {
  // Get the current date and time
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999); // Set time to end of the day

  // Get all the list items
  const listItems = document.querySelectorAll("#Tour_List li");

  // Loop through the list items and apply strikethrough style to the ones with passed dates
  listItems.forEach((item) => {
    const dateString = item.textContent.split(" - ")[0];
    const [eventMonth, eventDay] = dateString.split(" ");
    const eventDate = new Date(
      currentDate.getFullYear(),
      convertMonthStringToIndex(eventMonth),
      eventDay,
      23,
      59,
      59,
      999 // Set time to end of the day
    );

    if (eventDate < currentDate) {
      item.style.textDecoration = "line-through";
    }
  });

  // Helper function to convert month string to index (0-based)
  function convertMonthStringToIndex(monthString) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months.indexOf(monthString);
  }
}
