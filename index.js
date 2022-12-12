import { fetchPage, } from "./templates/pages.js";

window.onclick = function (e) {
    if (e.target.localName == 'a') {
        e.preventDefault()
        var anchor = e.target.closest('a');
        window.history.pushState('name:what', "Title", anchor.pathname + '/');
        whatIsUrl()
    }
}


const whatIsUrl = () => {
    let split = window.location.pathname.split('/')
    let path1 = split[1]
    let path2 = split[2]
    if ((path1 === "home") || (path1 === "index.html") || (path1 === "/") || (path1 === "")) {
        path1 = "index.html"
    }
    //use URL paths to get page, use path1, pass path2
    fetchPage(path1, path2)
}
whatIsUrl()

