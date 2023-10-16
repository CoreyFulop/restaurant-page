import "./mainStyles.css";

export function displayMain() {
    const container = document.getElementById("content");
    const mainContainer = document.createElement("div");
    mainContainer.textContent = "This is some placeholder text welcoming you to the restaurant's website.";
    container.appendChild(mainContainer);
    mainContainer.classList.add("container");
};