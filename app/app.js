import { changePage, getBooks } from "../model/model.js";

function initListeners() {}

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log("route", pageID);
  changePage(pageID);
}

// this function adds the url change listener to the window
function initSite() {
  $(window).on("hashchange", route);
  route();
}

// function loadBooks() {
//   let books = getBooks();
//   let homeBookCount = 12;

//   $.each(books, function (index, books) {
//     // console.log(index);
//     if (index < homeBookCount) {
//       $("#itemsHolder").append(
//         `<div class = "item-container">
//             <img src = "${books.image}"/>
//             <div class = "item-content">
//               <p class = "description">${books.description}</p>
//               <p class = "price">${books.price}</p>
//               <button id = "addBtn${books.id}" onclick = "addToCart">ADD TO CART</button>
//             </div>
//           </div>`
//       );
//     }
//   });
// }

$(document).ready(function () {
  // loadBooks();
  initSite();
});
