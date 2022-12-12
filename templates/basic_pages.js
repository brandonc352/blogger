export { fetchContentBasicPages };

const fetchContentBasicPages = () => {


    fetch("http://localhost:3000/basic_page")
        .then((response) => response.json())
        .then((data) => {

            data.forEach(element => {

                let newDiv = document.createElement("a");
                newDiv.setAttribute("id", "basicPage_title" + data.id)
                newDiv.setAttribute("class", "block_basicPage")
                newDiv.setAttribute("href", '/page/' + element.pageURL)
                newDiv.innerHTML = element.title
                document.getElementById('block_17').appendChild(newDiv)

                let newDiv2 = document.createElement("span");
                newDiv2.setAttribute("id", "blogPost_description" + data.id)
                newDiv2.setAttribute("class", "block_basicPage")
                newDiv2.setAttribute("href", '/page/' + element.pageURL)
                newDiv2.innerText = element.description
                document.getElementById('block_17').appendChild(newDiv2)



            })







        })
}
