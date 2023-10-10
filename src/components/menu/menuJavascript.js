export function displayMenu() {
    const container = document.getElementById("content");
    const menuContainer = document.createElement("div");
    menuContainer.textContent = "Hello Menu";
    container.appendChild(menuContainer);
};