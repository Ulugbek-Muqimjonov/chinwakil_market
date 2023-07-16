var eladdnavtbn = document.querySelector(".site-header__btn");
eladdnavtbn.addEventListener("click", function() {
    document.body.classList.add("active");
});
var eladdnavtbn = document.querySelector(".site-header__btn-hidden");
eladdnavtbn.addEventListener("click", function() {
    document.body.classList.remove("active");
});

var elbtn = document.querySelector(".btn");
elbtn.addEventListener("click", function() {
    alert("xaridingiz uchun raxmat");
})