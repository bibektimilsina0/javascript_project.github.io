const search = () => {
    const searchbox = document.getElementById("input").value.toUpperCase();
    const product = document.querySelectorAll(".product");
    const text = document.getElementsByTagName("h2");

    for (var i = 0; i < text.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];
        if (match) {
            let search =match.innerHTML||match.textContent; 

            if (search.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none ";
            }
        }
    }

}