document.querySelector(".booking-box button")
.addEventListener("click", () => {

const from =
document.querySelectorAll(".booking-box input")[0].value;

const to =
document.querySelectorAll(".booking-box input")[1].value;

if(from === "" || to === ""){
alert("Please enter source and destination.");
return;
}

alert(`Searching trains from ${from} to ${to}`);

});


const cards = document.querySelectorAll(".card");

cards.forEach(card => {
card.addEventListener("mouseenter", () => {
card.style.transform = "translateY(-10px) scale(1.03)";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "translateY(0)";
});
});