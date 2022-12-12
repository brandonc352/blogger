export { fetchBlockText };



const fetchBlockText = (parentBlockId) => {
    fetch("http://localhost:3000/block_text")
        .then((response) => response.json())
        .then((data) => {
            let result = data.find(x => x.blockId === parentBlockId);


            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", "block_text_" + result.blockId)
            newDiv.setAttribute("class", "block_text")
            newDiv.innerHTML = result.displayText
            document.getElementById('block_' + parentBlockId).appendChild(newDiv)
        })

}