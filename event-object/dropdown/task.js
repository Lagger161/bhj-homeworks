let dropdownList = document.querySelector(".dropdown__list");
let dropdownValue = document.querySelector(".dropdown__value");
let dropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));
let dropdownLink = Array.from(document.querySelectorAll(".dropdown__link"));

dropdownValue.addEventListener("click", function(){
    if (dropdownList.className === "dropdown__list dropdown__list_active") {
        dropdownList.className = "dropdown__list"
    } else {
        dropdownList.className = "dropdown__list dropdown__list_active"
    }
  }
)

for (let item of dropdownItem) {
    item.addEventListener("click", function (event){
        event.preventDefault();
        dropdownValue.textContent = dropdownItem[dropdownItem.indexOf(item)].querySelector(".dropdown__link").textContent;
        dropdownList.className = "dropdown__list";
    }
  )
}