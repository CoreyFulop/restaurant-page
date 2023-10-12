import "./menuStyles.css"

const menuMains = {
    mainOne: "another",
    mainTwo: "yet another"
};

export function displayMenu() {
    const content = document.getElementById("content");
    const menu = document.createElement("div");
    content.appendChild(menu);
    menu.classList.add("menu");
    const mainMenu = document.createElement("div");
    mainMenu.classList.add("mains");
    menu.appendChild(mainMenu);
    for (let item in menuMains) {
        let mainMenuItem = document.createElement("div");
        mainMenuItem.textContent = menuMains[`${item}`];
        mainMenu.appendChild(mainMenuItem);
    };
};