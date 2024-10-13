export function changePage(pageName) {
  console.log("pageName: ", pageName);
  if (pageName == "") {
    $.get("pages/home.html", (data) => {
      $("#app").html(data);
    }).fail((error) => {
      console.log("error", error);
      Swal.fire({
        title: "Error. Choose a different page.",
        text: `${error.statusText}`,
        icon: "error",
        confirmButtonText: "Yes",
        showCancelButton: true,
      });
    });
  } else {
    $.get(`pages/${pageName}.html`, (data) => {
      $("#app").html(data);
    }).fail((error) => {
      console.log("error", error);
    });
  }
}

// cart count
var cartCount = 0;

export function addItemToCart() {
  $(".signInOut .count").html(++cartCount);
}

console.log(cartCount);

// Books array
var books = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "99.99",
    image: "/images/books/twilight-box-set.jpg",
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "100",
    image: "/images/books/hp-box-set.jpg",
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "100",
    image: "/images/books/got-box-set.jpg",
  },
  //
  {
    id: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "27.99",
    image: "/images/books/finding me.jpg",
  },
  {
    id: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "19.99",
    image: "/images/books/mlk-biography.jpg",
  },
  {
    id: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "17.99",
    image: "/images/books/elenor-roosevelt-biography.jpg",
  },
  //
  {
    id: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "19.99",
    image: "/images/books/misery.jpg",
  },
  {
    id: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "15.99",
    image: "/images/books/frankenstein.jpg",
  },
  {
    id: 9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "19.99",
    image: "/images/books/phantoms.jpg",
  },
  //
  {
    id: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "19.99",
    image: "/images/books/winnie the pooh.jpg",
  },
  {
    id: 11,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "15.99",
    image: "/images/books/cat and the hat.jpg",
  },
  {
    id: 12,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "7.99",
    image: "/images/books/fun facts about space.jpg",
  },
];

export function getBooks() {
  return books;
}

// checking array
console.log(books);
