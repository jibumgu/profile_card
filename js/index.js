const body = document.querySelector("body");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const bgafter1 = document.querySelector(".background-after1");
const bgafter2 = document.querySelector(".background-after2");
const bgafter3 = document.querySelector(".background-after3");
const cancel1 = document.querySelector(".cancel1");
const cancel2 = document.querySelector(".cancel2");
const cancel3 = document.querySelector(".cancel3");

card1.addEventListener("click", () => {
    bgafter1.style.display = "block";
});

card2.addEventListener("click", () => {
    bgafter2.style.display = "block";
});

card3.addEventListener("click", () => {
    bgafter3.style.display = "block";
});

cancel1.addEventListener("click", () => {
    bgafter1.style.display = "none";
})

cancel2.addEventListener("click", () => {
    bgafter2.style.display = "none";
})

cancel3.addEventListener("click", () => {
    bgafter3.style.display = "none";
})