/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 706:
/***/ (() => {

//Script para enviar el formulario a la DB, a través de la API-Rest
const urlSubs = "http://localhost:3000/api/subscribe";

const form1 = document.querySelector("#contact-form");
form1.addEventListener("submit", evento => {
    evento.preventDefault();
    const dataForm = Object.fromEntries(new FormData(evento.target));
    //console.log(JSON.stringify(dataForm));

    fetch(urlSubs, {
        method: "POST",
        body: JSON.stringify(dataForm),
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
    })
        .then(async (res) =>  {
            console.debug(res);
            let data = await res.json();
            console.debug(data);
            if (Object.hasOwnProperty.call(data, "_id")) {
                alert('Datos enviados. Gracias por contactarnos...');
            }
        })
        .catch(e => console.error(e));
})






//Para comprobar si se guardaron los datos en el servidor
async function consultar () {
    let response = await fetch(urlSubs, {
        method: "GET",
        headers: {
            "Accept": "*/*",
        }
    });
    let data = await response.text();
    console.log(data)
    return data;
}


//La función anterior se realizó únicamente con fines demostrativos. No es correcto conceder el acceso a esos datos a cualquier usuario.





//Para cerrar el nav desplegable
function close() {
    document.getElementById('menu__toggle').checked = false
}
const bNavs = document.getElementsByClassName("menu__item");
for (const bNav of bNavs) {
    bNav.addEventListener("click", close)
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

__webpack_require__(706)
})();

/******/ })()
;