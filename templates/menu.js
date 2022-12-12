export { fetchBlockMenu };


//getting 5, 7, 6, 10, 
const fetchBlockMenu = (parentBlockId) => {

  fetch("http://localhost:3000/block_menu")
    .then((response) => response.json())
    .then((data) => {

      let result = data.find(x => x.blockId === parentBlockId);

      let newDiv = document.createElement("div");
      newDiv.setAttribute("id", "block_menu_" + result.id)
      newDiv.setAttribute("CLASS", "block_menu")

      document.getElementById('block_' + parentBlockId).appendChild(newDiv)
      
      fetchMenuItem(result.id)
    })
}

const fetchMenuItem = (parentMenuId) => {

  fetch("http://localhost:3000/menuItems")
    .then((response) => response.json())
    .then((data) => {
      

      //add blocks filtered by hide or show on the page


      let results = data.filter(element => element.menuId === parentMenuId)

      results.forEach(element => {

        let newDiv = document.createElement("a");
        newDiv.setAttribute("id", "menu_menuItem_" + element.id)
        newDiv.setAttribute("href", element.url)
        newDiv.innerText = element.title
        document.getElementById('block_menu_' + parentMenuId).appendChild(newDiv)
      })
    })
}

