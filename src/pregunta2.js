"use strict";

// La solucion de la pregunta 2 va aqui
"use strict";

// La solucion de la pregunta 2 va aqui
//PARTE 1
// 1. Escribe una función asíncrona 'loadNPause' que recree la pregunta 1, esta vez
// usando async / await (solo la parte donde se consume la promesa, reutilice la
// función 'createImage' que escribió antes)
const img = document.createElement("imgs");
const loadNPause = async function(createImage) {
  
   img.src="img.jpeg";  
   const request = await fetch (img);
   const data = await request.json();
   console.log(data);
};
loadNPause("img-1.jpeg");

// 2. Utilice .map para recorrer el array, para cargar todas las imágenes con la
// función 'createImage' (la matriz resultante se llamará 'imgs')

// 3. Muestre el array ‘imgs’ en la consola
// 4. Utilice una función de combinación de promesas para obtener las imágenes del
// array.
// 5. Agregue la clase 'parallel' a todas las imágenes (tiene algunos estilos CSS).

// const createImage = async function (loadNPause){
//    try{
//       const request = await fetch();
//    }
// }
