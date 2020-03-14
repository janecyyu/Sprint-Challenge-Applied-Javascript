// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  //create elements
  const headerEl = document.createElement("div"),
    date = document.createElement("span"),
    title = document.createElement("h1"),
    temperature = document.createElement("span");

  // append
  headerEl.append(date, title, temperature);

  //add class name
  headerEl.classList.add("header");
  date.classList.add("date");
  temperature.classList.add("temp");

  //add content
  date.textContent = "MARCH 28, 2019";
  title.textContent = "Lambda Times";
  temperature.textContent = "98°";

  //return
  return headerEl;
}

//add header to website
document.querySelector(".header-container").append(Header());
