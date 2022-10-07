const reveal = document.querySelectorAll(".reveal");

for (let item of reveal) {
    window.addEventListener("scroll", () => {  
         let height = window.innerHeight;
         let stopTop = item.getBoundingClientRect().top;
    
         if (stopTop < height && stopTop > 0) {
            item.classList.add("reveal_active")
         } else {
         item.classList.remove("reveal_active")
         }
    });
}