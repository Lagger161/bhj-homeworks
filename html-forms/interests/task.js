let interestCheck = document.querySelectorAll(".interest__check");
for (let item of interestCheck) {
    let interestCheckItem = item.closest(".interest").querySelectorAll(".interest__check");
    item.addEventListener("click", function checked() {
        if(item.checked) {
            if(interestCheckItem) {
                for(let subMenu of interestCheckItem) {
                    subMenu.checked = true;
                }
            }
        } else {
            for(let subMenu of interestCheckItem) {
                subMenu.checked = false;
            }
        }
    })
}
