const wrapper = document.querySelector(".sliderwrapper");
const menu = document.querySelectorAll(".menu");
let currentIndex = 0;

menu.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        currentIndex = index;
    });
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % menu.length;
    wrapper.style.transform = `translateX(${-100 * currentIndex}vw)`;
}, 3000);
