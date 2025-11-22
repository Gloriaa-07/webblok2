// JavaScript Document
console.log("hi");
// stap 1: zoek de menu-button op en sla die op in een variabele
const menuButton = document.querySelector("header button");
const deNav = document.querySelector("header nav");

menuButton.onclick = toggleMenu;



function toggleMenu() {
  deNav.classList.toggle("menuOpen");
}