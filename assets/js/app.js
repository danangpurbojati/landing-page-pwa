import loadNav from "./loadNav.js";
import loadPage from "./loadPage.js";

const app = () => {
    // take hash
    let page = window.location.hash.substr(1);

    // load navigation menu
    loadNav(page, loadPage);
    
    // Activate sidebar nav
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);

    // load initial start
    if(page === ""){
        loadPage("home");
    }else{
        loadPage(page);
    }
    
    // handling button "book now and our menu" in home page
    window.addEventListener("hashchange", event => {
        let hash = event.currentTarget.location.hash.substr(1);
        loadPage(hash);
    })

}

export default app;