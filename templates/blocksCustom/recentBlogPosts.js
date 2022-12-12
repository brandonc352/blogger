export { fetchRecentBlogPosts };

const fetchRecentBlogPosts = (parentBlockCustomId) => {

    fetch("http://localhost:3000/blog_posts")
        .then((response) => response.json())
        .then((data) => {

            let newArray = data.slice(Math.max(data.length - 5))

            newArray.forEach(element => {

                let newDiv = document.createElement("a");
                newDiv.setAttribute("id", "block_recentPosts_" + element.id)
                newDiv.setAttribute("class", "block_recentPosts")
                newDiv.setAttribute("href", element.pageURL )
                newDiv.innerHTML = element.title
                document.getElementById('block_custom_' + parentBlockCustomId).appendChild(newDiv)
            })
        })
}
