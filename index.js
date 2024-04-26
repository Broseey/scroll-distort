const content = document.querySelector("section");
let currentPos = window.pageYOffset;

const callDistort = function() {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.1;

    content.style.transform ="skewY(" +speed +"deg)";
    currentPos = newPos;
    requestAnimationFrame(callDistort);
}

callDistort();

const lenis = new Lenis(
    lerp=0.05
)

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)