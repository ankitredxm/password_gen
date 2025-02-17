let password=document.querySelector("#password");
let submit=document.querySelector("#gen");
const length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase=upperCase.toLowerCase();
const number="0123456789";
const symbol="!@##$%^&*(){}~";




const createPassword=()=>{
    let p="";
    for(let i=0;i<3;++i){
    let pass="";
    pass+=upperCase[Math.floor(Math.random()*25)];
    pass+=lowerCase[Math.floor(Math.random()*25)];
    pass+=number[Math.floor(Math.random()*10)];
    pass+=symbol[Math.floor(Math.random()*symbol.length)];
    p+=pass;

    }
    password.value=p;
}

submit.addEventListener("click",createPassword);


