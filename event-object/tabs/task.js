let tab = Array.from(document.querySelectorAll(".tab"));
let tabContent = Array.from(document.querySelectorAll(".tab__content"));
for (let index of tab) {
    index.addEventListener("click", function(){
        tab.map(item => item.className = "tab");
        tabContent.map(item => item.className = "tab__content");
        index.className = "tab tab_active";
        tabContent[tab.indexOf(index)].className = "tab__content tab__content_active";
    }
  )
}