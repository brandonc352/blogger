export { fetchRelatedContent };

const fetchRelatedContent = (parentBlockCustomId) => {

    fetch("http://localhost:3000/blog_posts")
        .then((response) => response.json())
        .then((data) => {

            let newArray = data.slice(Math.max(data.length - 5))

            newArray.forEach(element => {

                let newDiv = document.createElement("div");
                newDiv.setAttribute("id", "block_recentPosts_" + element.id)
                newDiv.setAttribute("class", "block_recentPosts")
                newDiv.innerHTML = element.title
                document.getElementById('block_custom_' + parentBlockCustomId).appendChild(newDiv)
            })
        })
}
