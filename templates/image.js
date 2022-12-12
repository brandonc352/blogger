export { fetchBlockImage };

const fetchBlockImage = (parentBlockId) => {
    fetch("http://localhost:3000/block_image")
        .then((response) => response.json())
        .then((data) => {
            let result = data.find(x => x.blockId === parentBlockId);

            let newDiv = document.createElement("img");
            newDiv.setAttribute("id", "block_Image_" + result.blockId)
            newDiv.setAttribute("src", result.imageURL)
            newDiv.innerHTML = result.id + " " + result.title
            document.getElementById('block_' + parentBlockId).appendChild(newDiv)
        })
}