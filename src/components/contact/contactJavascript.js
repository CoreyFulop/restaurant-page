import "./contactStyles.css";

export function displayContact() {
    const container = document.getElementById("content");
    const contactContainer = document.createElement("div");
    contactContainer.textContent = "You can reach us at placeholder@placeholder.com";
    container.appendChild(contactContainer);
    contactContainer.classList.add("container");
};