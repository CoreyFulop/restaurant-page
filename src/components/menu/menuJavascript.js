import "./menuStyles.css"

const menuStarters = {
    title: "Starters",
    starterOne: "starter one",
    starterTwo: "starter two"
}

const menuMains = {
    title: "Mains",
    mainOne: "main one",
    mainTwo: "main two"
};

const menuDessert = {
    title: "Dessert",
    dessetOne: "desset one",
    desserttwo: "dessert two"
}

export function displayMenu() {
    const content = document.getElementById("content");
    const menu = document.createElement("div");
    content.appendChild(menu);
    menu.classList.add("menu");
    /* starters */
    const starterMenu = document.createElement("div");
    starterMenu.classList.add("starters");
    menu.appendChild(starterMenu);
    for (let item in menuStarters) {
        let starterMenuItem = document.createElement("div");
        starterMenuItem.textContent = menuStarters[`${item}`];
        starterMenu.appendChild(starterMenuItem);
    };
    /* mains */
    const mainMenu = document.createElement("div");
    mainMenu.classList.add("mains");
    menu.appendChild(mainMenu);
    for (let item in menuMains) {
        let mainMenuItem = document.createElement("div");
        mainMenuItem.textContent = menuMains[`${item}`];
        mainMenu.appendChild(mainMenuItem);
    };
    /* dessert */
    const dessertMenu = document.createElement("div");
    dessertMenu.classList.add("dessert");
    menu.appendChild(dessertMenu);
    for (let item in menuDessert) {
        let dessertMenuItem = document.createElement("div");
        dessertMenuItem.textContent = menuDessert[`${item}`];
        dessertMenu.appendChild(dessertMenuItem);
    }
};