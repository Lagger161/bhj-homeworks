let cookie = document.getElementById("cookie");
cookie.onclick = function() {
    if (cookie.width == 200) {
        cookie.width = 400;
    } else {
        cookie.width = 200;
    }
    ++clicker__counter.textContent;
}