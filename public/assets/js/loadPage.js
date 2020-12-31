const loadPage = (page) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            const content = document.querySelector("#body-content");

            if (this.status === 200) {
                content.innerHTML = xhttp.responseText;
            } else if (this.status === 404) {
                content.innerHTML = `<p>Halaman tidak ditemukan.</p>`;
            } else {
                content.innerHTML = `<p>Ups.. halaman tidak dapat diakses.</p>`;
            }
        }
    };
    xhttp.open("GET", "/assets/pages/" + page + ".html", true);
    xhttp.send();
}

export default loadPage;