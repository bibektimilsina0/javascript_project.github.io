const display=document.getElementById("show");
const button=Array.from(document.getElementsByClassName("btn"));

button.forEach( btn=>{
    let calculate=(e)=>{
        switch(e.target.innerText)
        {
            case "AC":
                display.innerHTML=" ";
                break;
            case "X":
                display.innerHTML=display.innerText.slice(0,-1);
                break;
            case "=":
                display.innerHTML=eval(display.innerText);
                break; 
            default:
                display.innerHTML+=e.target.innerText;
        }
    }
    btn.addEventListener("click", calculate);
  
})

// const btn=document.querySelector(".btn");
