// window.onload=function (){
//     alert("Yeah, that page loaded");
// }

// setTimeout(function(){
//     alert("Time to take the cookie out of the oven");
// },6000);

// function vaccine(dosage){
//     if(dosage > 0){
//         inject(dosage);
//     }else{
//         let administer = function(){
//             alert("Lmao");
//         }
//     }
// }
// administer(patient, vaccine, time);

// let patient=function(){
//     alert("Hello, guy");
// }
// let vaccine=function(){
//     alert("Today, I want to talk");
// }
// let time= function(){
//     alert("Number 5 ")
// }

function name(){
    console.log("this is the function");
}

function text(name){
    
}



let migrating = true;
var fly= function(num){
    let sound = "Flying";
    function wingFlapper(){
        console.log(sound);
    }
    for(i =0; i< num; i++){
        wingFlapper();
    }
}

function quack(num){
    let sound = "Quack";
    let quacker= function(){
        console.log(sound);
    }
    for (let i = 0; i < num; i++) {
        quacker();
        
    }
}

if(migrating){
    quack(4);
    fly(4);
}