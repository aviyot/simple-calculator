
window.onload = function(){

    let signSec = document.querySelector("#sign");
    
    let plus = document.querySelector("#plus");
    let minus = document.querySelector("#minus");
    let mul = document.querySelector("#mul");
    let div = document.querySelector("#div");
    
    plus.addEventListener ("click",fn);
    minus.addEventListener ("click",fn);
    mul.addEventListener ("click",fn);
    div.addEventListener ("click",fn);
    
    function fn(event){
    
    event.preventDefault();
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let sign = event.currentTarget.innerHTML;
    let result = document.querySelector("#res");
    signSec.innerHTML = sign;
    
    if(sign == "+"){
        result.innerHTML  = Number(num1.value) + Number(num2.value); 
        
        }
        
        if(sign == "-"){
       result.innerHTML = Number(num1.value) - Number(num2.value);
        
        }
        
           if(sign == "x"){
        result.innerHTML = Number(num1.value) * Number(num2.value);
        }
        
           if(sign == "/"){
        result.innerHTML= Number(num1.value) / Number(num2.value);
        }
        
    }
    }
    