export { fetchContentBasicPage };
const fetchContentBasicPage = (path2, parentBlockId) => {


    fetch("http://localhost:3000/basic_page")
        .then((response) => response.json())
        .then((data) => {

            let newData = data.find(element => element.pageURL === path2)


            let newDiv = document.createElement("a");
            newDiv.setAttribute("id", "blogPost_title" + newData.id)
            newDiv.setAttribute("class", "block_basicPage_title")
            newDiv.setAttribute("href", '/page/' + newData.pageURL)
            newDiv.innerHTML = newData.title
            document.getElementById('block_15').appendChild(newDiv)

            let newDiv2 = document.createElement("span");
            newDiv2.setAttribute("id", "blogPost_description" + newData.id)
            newDiv2.setAttribute("class", "block_basicPage_description")
            newDiv2.setAttribute("href", '/page/' + newData.pageURL)
            newDiv2.innerText = newData.description
            document.getElementById('block_15').appendChild(newDiv2)
        })
}
