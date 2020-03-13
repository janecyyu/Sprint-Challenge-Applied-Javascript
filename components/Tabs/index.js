// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address:
//lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and
// add it to the DOM
// under the .topics element.
https: //
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(Response => {
    const parent = document.querySelector(".topics");
    Response.data.topics.forEach(e => parent.append(TabMaker(e)));
  });

//create tab component
function TabMaker(topic) {
  //create new elements
  const tabEl = document.createElement("div");

  //add class name
  tabEl.classList.add("tab");

  //add content
  tabEl.textContent = topic;

  tabEl.addEventListener("click", event => {
    addArticles(topic);
  });

  return tabEl;
}
