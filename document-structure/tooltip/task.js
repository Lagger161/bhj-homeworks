let hint = Array.from(document.querySelectorAll('.has-tooltip'));

function createTooltip(element, tooltipText, top, left) {
    let toolTip = `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${top}px">
    ${tooltipText}
    </div>`;

    element.insertAdjacentHTML('afterend', toolTip);
};

function getCoords(element) {
    let box = element.getBoundingClientRect();

    return {
        top: box.top + 30,
        left: box.left
    };
}

function removeAll() {
    for (link of hint) {
        if (link.nextElementSibling) {
            if (link.nextElementSibling.classList.contains('tooltip_active')) {
                link.nextElementSibling.remove();
            }
        }
    }
}

for (link of hint) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let coords = getCoords(this);

    if (this.nextElementSibling) {
        if (this.nextElementSibling.classList.contains('tooltip_active')) {
            this.nextElementSibling.remove();
        } 
    } 
    removeAll()
    createTooltip(this, this.title, coords.top, coords.left);
});
};