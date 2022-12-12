import { fetchRecentBlogPosts } from "./blocksCustom/recentBlogPosts.js";
import { fetchJoinNewsLetter } from "./blocksCustom/joinNewsLetter.js"

export { fetchBlockCustom };

const fetchBlockCustom = (parentBlockId) => {

    fetch("http://localhost:3000/block_custom")
        .then((response) => response.json())
        .then((data) => {
            let result = data.find(x => x.blockId === parentBlockId);

            let newDiv = document.createElement("div");
            //         newDiv.setAttribute("id", "block_custom_" + result.id)
            ////     newDiv.innerHTML = result.id + " " + result.title + "- CUSTOM"
            //   document.getElementById('block_' + parentBlockId).appendChild(newDiv)

            //if (result.machineName === "recentlyAddedBlogs") {
            //     fetchRecentBlogPosts(result.id)
            // } if (result.machineName === "newsLetterSignup") {
            //     fetchJoinNewsLetter(result.id)
            // } 
        })
}