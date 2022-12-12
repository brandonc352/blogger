export { fetchBlockWysiwyg };



const fetchBlockWysiwyg = (parentBlockId) => {
  fetch("http://localhost:3000/block_wysiwyg")
    .then((response) => response.json())
    .then((data) => {
      let result = data.find(x => x.blockId === parentBlockId);


      let newDiv = document.createElement("div");
      newDiv.setAttribute("id", "block_wysiwyg_" + result.blockId)
      newDiv.innerHTML = result.id + " " + result.title + "- WYSIWYG"
      document.getElementById('block_' + parentBlockId).appendChild(newDiv)
    })

}