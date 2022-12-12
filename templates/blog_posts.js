export { fetchContentBlogPosts };
//get just 1 blog post from url /post/fetch-javaasriptsometing
const fetchContentBlogPosts = (path2) => {// [page.id, blog.id] [2, 1]


    fetch("http://localhost:3000/blog_posts")
        .then((response) => response.json())
        .then((data) => {

            data.forEach(element => {
                let newParentDiv = document.createElement("div");
                newParentDiv.setAttribute("id", "blogPostParent" + element.id)
                newParentDiv.setAttribute("class", "blogPostParent")
                document.getElementById('block_16').appendChild(newParentDiv)

                let newDiv1 = document.createElement("a");
                newDiv1.setAttribute("id", "blogPost_title" + element.id)
                newDiv1.setAttribute("class", "blogPostTitle")
                newDiv1.setAttribute("href", '/post/' + element.pageURL)
                newDiv1.innerHTML = element.title
                document.getElementById("blogPostParent" + element.id).appendChild(newDiv1)

                let newDiv = document.createElement("span");
                newDiv.setAttribute("id", "blogPost_date" + element.id)
                newDiv.setAttribute("class", "blogPostDate")
                newDiv.innerHTML = element.date
                document.getElementById("blogPostParent" + element.id).appendChild(newDiv)

                let newDiv2 = document.createElement("div");
                newDiv2.setAttribute("id", "blogPost_description" + element.id)
                newDiv2.setAttribute("class", "blogPostDescription")
                newDiv2.setAttribute("href", '/post/' + element.pageURL)
                newDiv2.innerText = element.description
                document.getElementById("blogPostParent" + element.id).appendChild(newDiv2)



            })







        })
}
