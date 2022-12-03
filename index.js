// Imports
// Node getters
// Any NECESSARY hoisted data or variables
let showArticles = document.getElementById("showArticles");
let createArticle = document.getElementById("createArticle");
let title = document.getElementById("title");
let titleErr = document.getElementById("titleErr");
let description = document.getElementById("description");
let descriptionErr = document.getElementById("descriptionErr");

createArticle.addEventListener("submit", (e) => {
  e.preventDefault();

  let newArticle = {
    title: title.value,
    description: description.value,
  };

  if (validateAddArticle(newArticle)) {
    addArticle(newArticle);
    createArticle.reset();
  }
});

const getArticles = () => {
  fetch("http://localhost:3000/articles")
    .then((res) => res.json())
    .then((data) => renderArticles(data));
};

const renderArticles = (articleArray) => {
  articleArray.forEach((article) => renderArticle(article));
};

const renderArticle = (article) => {
  let h3 = document.createElement("h3");
  let p = document.createElement("p");

  h3.innerText = article.title;
  p.innerText = article.description;

  showArticles.append(h3);
  showArticles.append(p);
};

const validateAddArticle = (articleObject) => {
  if (articleObject.title.length === 0) {
    titleErr.innerHTML = "Title cannot be empty.";
  } else if (articleObject.description.length === 0) {
    descriptionErr.innerHTML = "Description cannot be empty.";
  } else {
    titleErr.innerHTML = "";
    descriptionErr.innerHTML = "";
    return true;
  }
};

const addArticle = (articleObject) => {
  fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleObject),
  })
    .then((res) => res.json())
    .then((data) => renderArticle(data));
};

getArticles();
