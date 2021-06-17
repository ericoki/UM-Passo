let maxScroll = 0;
let tagMenu = document.getElementById('menu');
window.addEventListener('scroll', function (evnt) {
    if (this.scrollY < maxScroll) {
        tagMenu.style.top = this.scrollY + "px";

        if (this.scrollY+100 < maxScroll) {
            maxScroll = this.scrollY;
        }
    }
    else {
        maxScroll = this.scrollY;
    }
})

