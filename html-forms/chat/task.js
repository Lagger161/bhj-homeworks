let chatWidget = document.querySelector(".chat-widget");

chatWidget.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active")
})

let time, date, hours, minutes, seconds;

function addTime() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    time = `${hours}:${minutes}:${seconds}`;
    return time;
}

let chatWidgetInput = document.getElementById("chat-widget__input");
let chatWidgetMessages = document.getElementById("chat-widget__messages");

function answerBot () {
    let speak = ["Нет желания общаться с тобой", "@$#*", "Отстань от меня", "Конечно помогу тебе... хаха, надурил))", "И что ты мне сделаешь?", "Разбирайся сам, мне все равно"];
    index = Math.floor(Math.random() * speak.length);
    return speak[index];
}

chatWidgetInput.addEventListener("keypress", (e) => {
    if(e.key.toLocaleLowerCase() === "enter" ) {
        if(chatWidgetInput.value.length > 0) {
            chatWidgetMessages.innerHTML += `<div class = "message message_client">
                                                <div class = "message__time">${addTime()}</div>
                                                <div class = "message__text">${chatWidgetInput.value}</div>
                                            </div>`;
        } else {
            return false;
        }

        chatWidgetInput.value = "";
        chatWidgetMessages.innerHTML += `<div class = "message">
                                            <div class = "message__time">${addTime()}</div>
                                            <div class = "message__text">${answerBot()}</div>
                                        </div>`
    }
})


