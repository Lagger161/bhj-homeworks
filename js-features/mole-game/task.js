
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

function hole(index) {
    return document.getElementById(`hole${index}`)
}

for (let i = 1; i < 10; i++) {
    hole(i).onclick = function () {
        if (hole(i).className.includes("hole_has-mole")) {
            ++dead.textContent;
            winner();
        } else {
            ++lost.textContent; 
            winner();
        }
    }
}

function winner() {
    if (dead.textContent == 10) {
        alert("Вы победили)")
        dead.textContent -= dead.textContent
        lost.textContent -= lost.textContent
    } else if(lost.textContent == 5) {
        alert("Победил крот(")
        dead.textContent -= dead.textContent
        lost.textContent -= lost.textContent
    }
}