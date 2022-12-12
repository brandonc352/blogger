import { fetchContentBlogPost } from "./blog_post.js";
import { fetchContentBlogPosts } from "./blog_posts.js";
import { fetchContentBasicPage } from "./basic_page.js";
import { fetchContentBasicPages } from "./basic_pages.js";
import { fetchBlockCustom } from "./custom.js";
import { fetchBlockText } from "./text.js";
import { fetchBlockWysiwyg } from "./wysiwyg.js";
import { fetchBlockMenu } from "./menu.js";
import { fetchBlockImage } from "./image.js";

export { fetchblock };







const fetchblock = (parentSectionId, path2) => { /* sec id in: --1--     top, 2 header, 3 */

    fetch("http://localhost:3000/blocks")
        .then((response) => response.json())
        .then((data) => {

            const newArray = data.filter(element => element.sectionId === parentSectionId)
            newArray.forEach(element => {

                let newDiv = document.createElement("div");
                newDiv.setAttribute("id", "block_" + element.id)
                newDiv.setAttribute("class", "block")
                //newDiv.innerHTML = "<span class=\"block\">" + element.id + " " + element.title + "</span>"
                document.getElementById('section_' + parentSectionId).appendChild(newDiv)


                if (element.type === "custom") {
                    fetchBlockCustom("element.id")
                }
                if (element.type === "content") {
                    if (element.id === 14) {
                        fetchContentBlogPost(path2, element.id)
                    }
                    if (element.id === 16) {
                        fetchContentBlogPosts(path2)
                    }
                    if (element.id === 15) {
                        fetchContentBasicPage(path2)
                    }
                    if (element.id === 17) {
                        fetchContentBasicPages(path2)
                    }

                }

                if (element.type === "text") {
                    fetchBlockText(element.id)
                }
                if (element.type === "wysiwyg") {
                    fetchBlockWysiwyg(element.id)
                }
                if (element.type === "menu") {


                    fetchBlockMenu(element.id)
                }
                if (element.type === "image") {


                    fetchBlockImage(element.id)
                }

            })
        }
        )
}








