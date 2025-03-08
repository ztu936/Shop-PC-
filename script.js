document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            let product = this.parentElement.querySelector("h3").textContent;
            alert(`Товар "${product}" добавлен в корзину!`);
        });
    });
});