export function displayContact() {
    const container = document.getElementById("content");
    const contactContainer = document.createElement("div");
    contactContainer.textContent = "Hello Contact";
    container.appendChild(contactContainer);
};