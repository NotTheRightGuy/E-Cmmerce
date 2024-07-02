const wrapper = document.querySelector(".sliderwrapper")
const menu = document.querySelectorAll(".menu")

menu.forEach((item,index)=>{
    item.addEventListener("click" , ()=>{
        wrapper.style.transform='translateX(${-100 * index}vw)';});
    })



