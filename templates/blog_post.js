export { fetchContentBlogPost };
//get just 1 blog post from url /post/fetch-javaasriptsometing
const fetchContentBlogPost = (path2) => {// [page.id, blog.id] [2, 1]

    console.log(path2 + " heree  ")
    fetch("http://localhost:3000/blog_posts")
        .then((response) => response.json())
        .then((data) => {

            let newData = data.find(element => element.pageURL === path2)

            let newDiv = document.createElement("a");
            newDiv.setAttribute("id", "blogPost_title" + newData.id)
            newDiv.setAttribute("class", "block_blogPost_title")
            newDiv.setAttribute("href", '/post/' + newData.pageURL)
            newDiv.innerHTML = newData.title
            document.getElementById('block_14').appendChild(newDiv)

            let newDiv2 = document.createElement("span");
            newDiv2.setAttribute("id", "blogPost_description" + newData.id)
            newDiv2.setAttribute("class", "block_blogPost_description")
            newDiv2.setAttribute("href", '/post/' + newData.pageURL)
            newDiv2.innerText = newData.description
            document.getElementById('block_14').appendChild(newDiv2)
        })
}
