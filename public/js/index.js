const $ = (x) => {
    return document.getElementsByName(x);
};


//when devour button clicked devoured boolean updated to true
$("devourBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        fetch(`/api/burgers/${id}`, {
            method: 'PUT',
        }).then(() => {
            location.reload();
        });
    });
});

//handle submit, adding burger to menu
let menuForm = document.getElementById("createBurger");
let burgerInput = document.getElementById("burgerName");

menuForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let burgerName = burgerInput.value;
    let newBurger = {burgerName: burgerName, devoured: false};
    console.log(newBurger)
    fetch("/api/burgers/", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newBurger)
    }).then(function (response) {
        console.log(response);
        location.reload();
    });
})