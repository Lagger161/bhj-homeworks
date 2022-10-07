let rotator = Array.from(document.getElementsByClassName("rotator"));

rotator.forEach(el => {
    let swap = el.querySelectorAll(".rotator__case");
    let score = 0;
    let interval = swap[score].dataset.speed;
    setTimeout(rotatorCase, interval);

    function rotatorCase() {
        swap[score].classList.remove("rotator__case_active");
        ++score;

        if(score === swap.length) score = 0;

        interval = swap[score].dataset.speed;
        swap[score].classList.add("rotator__case_active");
        setTimeout(rotatorCase, interval)
    }


})