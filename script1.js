let hourelement = document.querySelector(".hh");
let minuteelement = document.querySelector(".mm");
let secondelement = document.querySelector(".ss");

let ticking = function(){
    let currentDate = new Date();

    let hr=currentDate.getHours();
    let mn=currentDate.getMinutes();
    let sc=currentDate.getSeconds();

    hourelement.innerHTML=hr;
    minuteelement.innerHTML=mn;
    secondelement.innerHTML=sc;
}

function Startclock(){
    ticking();
    setInterval(ticking,1000);
};

Startclock();