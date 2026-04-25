let coin=document.querySelector("#coin");
let btn=document.querySelector("#startBtn");
const tossEffect=()=>{
    coin.classList.remove("flip");
    void coin.offsetWidth;
    coin.classList.add("flip");
}
const result=()=>{
    coin.innerText="";
    tossEffect()
    let randomNum=Math.ceil(Math.random()*10);
    coin.addEventListener("animationend",()=>{
    if(randomNum%2==0){
        
        coin.style.fontWeight="bold";
        coin.innerText="Head";
        
    }
    else{
        coin.style.fontWeight="bold";
        coin.innerText="Tail";
        
    }},
    {once:true});
};
btn.addEventListener("click", result);

