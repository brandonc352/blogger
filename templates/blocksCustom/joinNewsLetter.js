export { fetchJoinNewsLetter };

const fetchJoinNewsLetter = (parentBlockCustomId) => {

    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "block_custom_joinNewsLetter_" + parentBlockCustomId)
    newDiv.innerHTML = `
    <form>
    <label for="joinNewsletter">Your Email<br>
    <input id="joinNewsletter" type="text" /><br>
    <button>Click to Join</button>
    </form>
    `
    document.getElementById('block_custom_1').appendChild(newDiv)
}
