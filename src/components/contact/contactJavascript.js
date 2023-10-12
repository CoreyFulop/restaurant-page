import "./contactStyles.css";

export function displayContact() {
    const container = document.getElementById("content");
    const contactContainer = document.createElement("div");
    contactContainer.textContent = "Hello Contact";
    container.appendChild(contactContainer);
    contactContainer.classList.add("container");
};