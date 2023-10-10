import {displayMain} from "./components/main/mainJavascript";
import {displayContact} from "./components/contact/contactJavascript";
import {displayMenu} from "./components/menu/menuJavascript";

displayMain();

const container = document.getElementById("content");

const mainTab = document.getElementById("main");
const menuTab = document.getElementById("menu");
const contactTab = document.getElementById("contact");

mainTab.addEventListener("click", () => {
    container.textContent = "";
    displayMain();
});

menuTab.addEventListener("click", () => {
    container.textContent = "";
    displayMenu();
});

contactTab.addEventListener("click", () => {
    container.textContent = "";
    displayContact();
});
