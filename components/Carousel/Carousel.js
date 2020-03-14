/* If You've gotten this far, you're on your own!
Although we will give you some hints:
    1. You will need to write a function that creates the carousel component,
    you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component.
    Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function CarouselMaker(imageUrl) {
  //create elements
  const container = document.createElement("div"),
    leftBtn = document.createElement("div"),
    image = document.createElement("img"),
    // imgTwo = document.createElement('img'),
    // imgThree = document.createElement('img'),
    // imgFour = document.createElement('img'),
    rightBtn = document.createElement("div");

  //append
  container.append(leftBtn, image, rightBtn);

  //add class name
  container.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");

  //add content
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";
  image.src = "./assets/carousel/mountains.jpeg";
  image.style.display = "block";

  const imageList = [
    "./assets/carousel/computer.jpeg",
    "./assets/carousel/trees.jpeg",
    "./assets/carousel/turntable.jpeg",
    "./assets/carousel/mountains.jpeg"
  ];
  // imgTwo.src="./assets/carousel/computer.jpeg";
  // imgThree.src="./assets/carousel/trees.jpeg";
  // imgFour.src="./assets/carousel/turntable.jpeg";
  rightBtn.addEventListener("click", event => {
    if (image.src.includes("mountains")) {
      image.src = imageList[0];
    } else if (image.src.includes("computer")) {
      image.src = imageList[1];
    } else if (image.src.includes("trees")) {
      image.src = imageList[2];
    } else if (image.src.includes("turntable")) {
      image.src = imageList[3];
    }
  });

  leftBtn.addEventListener("click", event => {
    if (image.src.includes("mountains")) {
      image.src = imageList[0];
    } else if (image.src.includes("computer")) {
      image.src = imageList[1];
    } else if (image.src.includes("trees")) {
      image.src = imageList[2];
    } else if (image.src.includes("turntable")) {
      image.src = imageList[3];
    }
  });

  return container;
}

//get parent
const carousel = document.querySelector(".carousel-container");
carousel.append(CarouselMaker());
