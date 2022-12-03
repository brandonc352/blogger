let createArticle = document.getElementById("createArticle");
title = document.getElementById("title").value;
titleErr = document.getElementById("titleErr");
description = document.getElementById("description").value;
descriptionErr = document.getElementById("descriptionErr");
user = 1;

createArticle.addEventListener("submit", (e) => {
    e.preventDefault();
    

 
  if (validateAddArticle(title, description) === true) {

    articleObject = title + "," + description

    addArticles(articleObject);
    console.log(articleObject)
  } else {
    console.log("Invalid");
  }
});

const validateAddArticle = (title, description) => {
  if (title.length === 0) {
   
    titleErr.innerHTML = `Title cannot be empty.`;
  } else {
    titleErr.innerHTML = "";
  }
  if (description.length === 0) {
    descriptionErr.innerHTML = `Description cannot be empty.`;

  } else {
    descriptionErr.innerHTML = "";
  }
  if (title.length > 0 && description.length > 0) {
    
    return true;
  } else {
    console.log("title and desc  === 0");
    return false;
  }
};

const addArticles = (x,y) => {
    
    
    let person = {title:title, descrition:description};
    console.log(person)
    
    fetch("http://localhost:3000/articles",  {
        method:"post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(person)
    })
};



