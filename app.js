const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Mens shirt",
    price: 119,
    colors: [
      {
        code: "Green",
        img: "./img/g2.png",
      },
      {
        code: "Blue",
        img: "./img/b2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Crop top",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/black.png",
      },
      {
        code: "green",
        img: "./img/green.png",
      },
    ],
  },
  {
    id: 3,
    title: "Kurtis",
    price: 109,
    colors: [
      {
        code: "yellow",
        img: "./img/yellow.jpg",
      },
      {
        code: "white",
        img: "./img/white.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Winter",
    price: 129,
    colors: [
      {
        code: "brown",
        img: "./img/brown.jpg",
      },
      {
        code: "lightpink",
        img: "./img/pink.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Formal Shirt",
    price: 99,
    colors: [
      {
        code: "Black",
        img: "./img/blackshirt.jpg",
      },
      {
        code: "grey",
        img: "./img/whiteshirt.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
   
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
