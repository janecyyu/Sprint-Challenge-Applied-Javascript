// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address:
// https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function addArticles(type) {
  axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
      //console.log(response.data);
      const parent = document.querySelector(".cards-container");
      let articles = [];
      if (type === "node.js") {
        articles = response.data.articles.node;
      } else if (type === "javascript"){
        articles = response.data.articles.javascript;
      } else if (type === "bootstrap"){
        articles = response.data.articles.bootstrap;
      } else if (type === "technology"){
        articles = response.data.articles.technology;
      } else if (type === "jquery"){
        articles = response.data.articles.jquery;
      }
      while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
      }
      articles.forEach(e => parent.append(CardMaker(e)));
    });
}

function CardMaker(article) {
  //create elements
  const cardContainer = document.createElement("div"),
    title = document.createElement("div"),
    authorContainer = document.createElement("div"),
    imageContainer = document.createElement("div"),
    image = document.createElement("img"),
    name = document.createElement("span");

  //append
  cardContainer.append(title);
  cardContainer.append(authorContainer);
  authorContainer.append(imageContainer, name);
  imageContainer.append(image);

  //add class name
  cardContainer.classList.add("card", "hide");
  title.classList.add("headline");
  authorContainer.classList.add("author");
  imageContainer.classList.add("img-container");

  //add content
  title.textContent = article.headline;
  image.src = article.authorPhoto;
  name.textContent = article.authorName;

  return cardContainer;
}
