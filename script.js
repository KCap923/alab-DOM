// Part 1 *************************************************************
const mainEl = document.querySelector("main");
console.log(mainEl);
mainEl.classList.add("--main-bg");
console.log(mainEl);
mainEl.style.backgroundColor = "var(--main-bg)";
const h1 = document.createElement("h1");
mainEl.appendChild(h1);
h1.textContent = "DOM Manipulation";
mainEl.classList.add("flex-ctr");


//Menu Bar *************************************************************
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0E9AA7";
topMenuEl.classList.add("flex-around");


// Original links ****************************************************** 
// Adding Menu Buttons
// var menuLinks = [
//   { text: "about", href: "/about" },
//   { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/orders" },
//   { text: "account", href: "/account" },
// ];


// Updated menu links ************************************************** 
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

menuLinks.forEach((link, i) => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});
const names2 = ["Join", "Customer Service", "Address"];
const names3 = ["Blog", "Register", "Login", "Log Out"];
const colors = ["red", "blue", "gold", "dark grey"];
names2.forEach((liNames2) => {
  const li2 = document.createElement("li");
  const aTag1 = document.createElement("a");
  aTag1;
  aTag1.textContent = liNames2;
  li2.appendChild(aTag1);
});

// Part two ******************************************************

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList = "flex-around";
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";


// Not Working ******************************************************************

// const topMenuLinks = document.getElementsByTagName("a");

// topMenuE1.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   if (evt.target.topMenuLinks !== "a") {
//     return;
//   }
//   console.log(evt.target.textContent);
// });


// Select & Cache all <a> elements ********************************
const topMenuLinks = document.getElementsByTagName("a");
topMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();


  if (evt.target.nodeName !== "A") {
    return;

  }
  console.log(evt.target, evt)


// Toggle for active ************************************************



  topMenuLinks.forEach((link) => {
    if (link !== evt.target) {
      link.classList.remove("active");

    }
  });

  evt.target.classList.toggle("active");
  console.log("test", evt.target.textContent);
});







