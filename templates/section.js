import { fetchblock } from "./block.js";
export { fetchSections };


const fetchSections = (pageId, path2) => {

    fetch("http://localhost:3000/section/")
        .then((response) => response.json())

        .then((data) => {

            const newArray = data.filter(element => element.pageIds.includes(pageId) === true)
            newArray.sort((a, b) => a.distance - b.distance)

            newArray.forEach(element => {

                let newDiv = document.createElement("div");
                newDiv.setAttribute("id", "section_" + element.id)
                newDiv.setAttribute("class", element.title)
                //newDiv.innerHTML = "<span class=\"section\">" +element.id +" "+ element.title +"</span>"
                document.getElementById('page_' + pageId).appendChild(newDiv)

                fetchblock(element.id, path2)
            })
        });
};





















