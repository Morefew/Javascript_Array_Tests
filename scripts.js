/*

document.getElementById('id') - Acceder a un elemento por su id

document.querySelector('selectorCSS') - Acceder al primer elemento que coincida con el selector CSS

document.querySelectorAll('selectorCSS') - Acceder a todos los elementos que coincidan con el selector CSS, devuelve un nodeList

*/

const title = document.getElementById("title");
title.textContent = "DOM - Accediendo a nodos";

const paragraph = document.querySelector(".paragraph:nth-child(3)");
// paragraph.textContent = " Nuevo Parrafo 3";
