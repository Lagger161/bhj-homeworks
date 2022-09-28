let timer = document.getElementById("timer");
let end = new Date().getTime() + 1000 * 30;
function countDown() {
    let currentDate = new Date();
    let difference = end - currentDate;
    let seconds = Math.floor((difference / 1000) % 30);
    let minutes = Math.floor((difference / 1000 / 30) % 30);
    let hours = Math.floor((difference / 1000 / 30 / 30));
    timer.textContent = (hours < 10 ? `0${hours}` : hours) + " " + (minutes < 10 ? `0${minutes}` : minutes) + " " + (seconds < 10 ? `0${seconds}` : seconds);
    if (minutes === 0 && seconds === 0 && hours === 0) {
        alert("Вы победили в конкурсе!")
        clearInterval(interval);
    }
    return
}

let interval = setInterval(countDown, 1000);