
//let maxScroll = 0;
//let tagMenu = document.getElementById('menu');
//window.addEventListener('scroll', function (evnt) {
    //if (this.scrollY < maxScroll) {
       // tagMenu.style.top = this.scrollY + "px";

      //  if (this.scrollY+100 < maxScroll) {
          //  maxScroll = this.scrollY;
       // }
   // }
  //  else {
     //   maxScroll = this.scrollY;
  //  }
//})

//const hamburger = document.querySelector(".menu-toggle");
//const navMenu = document.querySelector(".menu-section");

//hamburger.addEventListener("click", mobileMenu);

//function mobileMenu() {
   //hamburger.classList.toggle("on");
    //navMenu.classList.toggle("on");


let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})
