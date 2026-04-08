function phoneMenuToggle() {
    var vis = document.getElementById("dropdown-phone");
    if (vis.style.display === "none") {
        vis.style.display = "flex";
    } else {
        vis.style.display = "none"
    }
}