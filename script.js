const cards = document.querySelectorAll(".cards");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const rechargeAmount = card.innerHTML;
        localStorage.setItem("rechargeAmount", rechargeAmount);
        window.location.href = "lastscreen.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const rechargeAmount = localStorage.getItem("rechargeAmount");
    document.querySelector(".newbalance").innerHTML = `New Balance is:${rechargeAmount}`;
    localStorage.removeItem("rechargeAmount");
});

// let recharge = document.querySelector(".recharge");
// recharge.addEventListener("click" , ()=>{
//     document.querySelector(".firstlink");
// });

// let button = document.querySelector(".firstback");
// button.addEventListener("click" , () => {
//     window.location.href = "index.html";
// });

// let next = document.querySelector("#next");
// next.addEventListener("click" , () =>{
//     window.location.href = "thirdScreen.html"
// });

// let button_2 = document.querySelector("#Back");
// button_2.addEventListener("click" , () => {
//     window.location.href = "index.html";
// });
// let cash = document.querySelector(".forthscreencard");
// cash.addEventListener("click" , () => {
//     window.location.href = "lastscreen.html";
// });

// let card1 = document.querySelector("#card1");
// card1.addEventListener("click" , () => {
//     window.location.href = "lastscreen.html";
//    let balance =  document.querySelector(".newbalance");
//    balance.innerHTML = `New Recharge Balance is:${card1.innerHTML}`;
// });

