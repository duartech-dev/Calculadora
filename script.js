const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button")
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "igual") {
            display.value = eval(display.value);
        } else if (btn.id === "AC") {
            display.value = "";
        } else if (btn.id === "C") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }
    });
});
//jsdjasjdsd