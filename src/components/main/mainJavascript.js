import "./mainStyles.css";

export function displayMain() {
    const container = document.getElementById("content");
    const mainContainer = document.createElement("div");
    mainContainer.textContent = "Hello Main";
    container.appendChild(mainContainer);
    mainContainer.classList.add("container");
};