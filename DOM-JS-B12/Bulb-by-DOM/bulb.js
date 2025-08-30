const button = document.querySelector("button");
const bulb = document.querySelector("#bulb");

button.addEventListener("click", () => {
    if (bulb.style.backgroundColor === "yellow") {
        bulb.style.backgroundColor = "transparent";
        bulb.style.boxShadow = "none";
        button.textContent = "Turn It On";
    } else {
        bulb.style.backgroundColor = "yellow";
        bulb.style.boxShadow = "0 0 1000px rgba(255, 255, 0, 0.626)";
        button.textContent = "Turn It Off";
    }
});
