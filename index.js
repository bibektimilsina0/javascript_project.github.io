
// const drum = document.querySelector(".number");
// const button = Array.from(drum.getElementsByClassName("drum"));


// button.forEach(button => {
//     button.addEventListener("click", () => {
//         switch (button.innerHTML) {
//             case "w":
//                 let tom1 = new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;
//             case "a":
//                 let tom2 = new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;
//             case "s":
//                 let tom3 = new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;
//             case "d":
//                 let tom4 = new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;
//             case "j":
//                 let snare = new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;
//             case "k":
//                 let crash = new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;
//             case "l":
//                 let audio = new Audio("sounds/kick-bass.mp3");
//                 audio.play();
//                 break;
//         }
//     })
// })

const drum = document.querySelector(".number");
const button = drum.getElementsByClassName("drum");



function soundeffect(key){
        
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}
for (let i=0; i<button.length; i++){
 
    document.getElementsByClassName("drum")[i].addEventListener("click", ()=>{
        soundeffect(button[i].innerText);
    });

};
document.addEventListener("keypress",(event)=>{
    soundeffect(event.key);
});