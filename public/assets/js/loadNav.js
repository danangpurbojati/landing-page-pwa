const loadNav = (page, loadPage) => {

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status !== 200) return;

            // load menu contents
            document.querySelectorAll(".topnav, .sidenav").forEach( elm => {
                elm.innerHTML = xhttp.responseText;
            });

            // add click event to every menu links
            document.querySelectorAll(".sidenav a, .topnav a").forEach( elm => {
                elm.addEventListener("click", event => {

                    // close sidenav
                    const sidenav = document.querySelector(".sidenav");
                    M.Sidenav.getInstance(sidenav).close();

                    // load page loaded
                    page = event.target.getAttribute("href").substr(1);
                    loadPage(page);
                });
            });
        }
    };
    xhttp.open("GET", "nav.html", true);
    xhttp.send();
}

export default loadNav;