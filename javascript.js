let inuput =document.getElementById("input");
let button =document.getElementById("btn");
let output =document.getElementById("output");
let warning =document.getElementById("show");
const letter =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    button.addEventListener("click",function(){
        let ahmadzai = Number(inuput.value) ;
      if(ahmadzai < 4 || ahmadzai > 20 ){
        warning.textContent="Length must be between 4 and 20";
        output.value="";
        return;

      }

      warning.textContent="";
      let password="";
        for(i =0;i<ahmadzai;i++){
            let rand =Math.floor(Math.random()*letter.length)
            password +=letter[rand];
        }
        output.value=password;
    })