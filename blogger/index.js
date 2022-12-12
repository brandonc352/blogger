//Blogger
//Imports
//Node Getters

let mainDiv = document.getElementById("maindiv");

let newArticle = document.getElementById("newArticle");
let showArticles = document.getElementById("showArticles");

let date = document.getElementById("date");
let dateErr = document.getElementById("dateErr");

let title = document.getElementById("title");
let titleErr = document.getElementById("titleErr");

let description = document.getElementById("description");

let pageURL = document.getElementById("pageURL");
let pageURLerr = document.getElementById("pageURLerr");

let user = 1;
newArticle.addEventListener("submit", (e) => {
  e.preventDefault();
  let articlesArray = {
    date: date.value,
    pageURL: pageURL.value,
    title: title.value,
    description: description.value,
  };
  if (validateNewArticle(articlesArray)) {
    createArticle(articlesArray);
    newArticle.reset();
  }
});
const validateNewArticle = (articleObject) => {
  if (articleObject.date.length === 0) {
    dateErr.innerHTML = "Date cannot be empty.";
  } else {
    dateErr.innerHTML = "";
  }
  if (articleObject.title.length === 0) {
    titleErr.innerHTML = "Title cannot be empty.";
  } else {
    titleErr.innerHTML = "";
  }

  if (articleObject.pageURL.length === 0) {
    pageURLerr.innerHTML = "Page URL cannot be empty.";
  } else {
    pageURLerr.innerHTML = "";
  }

  if (
    articleObject.title.length !== 0 &&
    articleObject.date.length !== 0 &&
    articleObject.pageURL.length !== 0
  ) {
    return true;
  }
};

const createArticle = (sendArticle) => {
  fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendArticle),
  })
    .then((res) => res.json())
    .then((data) => renderArticle(data));
};
const getArticles = () => {
  fetch("http://localhost:3000/articles")
    .then((res) => res.json())
    .then((data) => renderArticles(data));
};
const renderArticles = (articlesArray) => {
  articlesArray.forEach((article) => renderArticle(article));
};
const renderArticle = (article) => {
  let title = document.createElement("a");
  let description = document.createElement("p");
  let date = document.createElement("p");
  let pageURL = document.createElement("p");
  title.innerText = article.title;
  description.innerText = article.description;
  date.innerText = article.date;
  pageURL.innerText = article.pageURL;
  showArticles.append(title);
  showArticles.append(date);
  showArticles.append(description);
  showArticles.append(pageURL);
  













};
getArticles();













renderPage = (pageName) => {
  //get sections with current page.id with from <a href="pagename"></a>
  currentPageId = pageName;
  sections = [{ name: "top" }, { name: "middle" }, { name: "bottom" }];

  mainDiv.innerHTML = `<div id="mainInner">${sections}</div>`;
  //get blocks that match page.id
  //
  renderBlock = () => {};
  //menu
  //content
  //
  //go to blocks to look for any blocks with that id and put those in an array to use
};
renderPage();
//request from pages table to match pageURL with records id.
//go to blocks to look for any blocks with that id and put those in an array to use
