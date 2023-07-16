var eladdnavtbn = document.querySelector(".site-header__btn");
eladdnavtbn.addEventListener("click", function() {
    document.body.classList.add("active");
});
var eladdnavtbn = document.querySelector(".site-header__btn-hidden");
eladdnavtbn.addEventListener("click", function() {
    document.body.classList.remove("active");
});

console.log(eladdnavtbn);
