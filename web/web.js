let typed= new Typed(".typing",{
    strings:["Developer","Blogger","Designer", "Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
});
let typed1= new Typed(".typing1",{
    strings:["Developer","Blogger","Designer", "Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
});



const icon=Array.from(document.querySelectorAll(".icon"));
const hover =Array.from(document.querySelectorAll(".services .whatiprovide .flex .card .box"));
hover.forEach(colorchange=>{
    const change=()=>{
        icon.forEach(icon.style.color ="white");
    }
    hover.addEventListner("onmoouseover", change);
})