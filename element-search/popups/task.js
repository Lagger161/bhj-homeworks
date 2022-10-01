let modalMain = document.getElementById("modal_main")
modalMain.className = "modal modal_active";
let modalClose = document.getElementsByClassName("modal__close modal__close_times");
for (item of modalClose) {
    item.onclick = function() {
        modalMain.className = "modal";
        modalSuccess.className = "modal";
    }
}

let success = document.getElementsByClassName("show-success");
let modalSuccess = document.getElementById("modal_success");
success.item(0).onclick = function() {
    modalSuccess.className = "modal modal_active";
    modalMain.className = "modal";
}