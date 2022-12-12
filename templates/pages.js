import { fetchSections, } from "./section.js";
export { fetchPage };


const fetchPage = (path1, path2) => {


    let listen = document.getElementsByClassName("page")
    if (listen.length === 0) {

    }
    else {
        let wipeThis = listen[0]
        wipeThis.remove()
    }
    




    return fetch("http://localhost:3000/page")

        .then((response) => response.json())
        .then((data) => {

            let newData = data.find(element => element.urlPath === path1)
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "page")
            newDiv.setAttribute("id", "page_" + newData.id)
            document.body.appendChild(newDiv);







            fetchSections(newData.id, path2)
        })
}





