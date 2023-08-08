/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arregloDeArreglos = [];
   let keys = Object.keys(objeto);
   let values = Object.values(objeto);

   for(let i = 0; i < keys.length; i++){
      arregloDeArreglos.push([keys[i], values[i]]);
   }
   return arregloDeArreglos;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {};
   string = string.split('').sort();

   for (let i = 0; i < string.length; i++){
      if(string[i] !== string[i-1]){
         objeto[string[i]] = 1;
      } else {
         objeto[string[i]] +=1;
      }
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let minuscula = '';
   let mayuscula = '';
   for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() === string[i]){
         minuscula += string[i];
      } else {
         mayuscula += string[i];
      }
   }
   return mayuscula + minuscula;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   return frase
      .split(" ")
      .map((palabra) => palabra.split("").reverse().join(""))
      .join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   const numStr = numero.toString();
   const numReverso = numStr.split("").reverse().join("");
   if(numStr === numReverso){
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/[abc]/g, "");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let arraySort = [arrayOfStrings[0]];
   for(let i = 1; i < arrayOfStrings.length; i++) {
      let CurrentPosition = arrayOfStrings[i];
      let encerted = false;
      for (let x = 0; x < arraySort.length; x++) {
         if ( CurrentPosition.length < arraySort[x].length) {
            for(let j = arraySort.length; j > x; j--) {
               arraySort[j] = arraySort[j-1];
            }
            arraySort[x] = CurrentPosition;
            encerted = true;
            break;
         }
      }
      if(!encerted) {
         arraySort.push(CurrentPosition);
      }
   }
   return arraySort;
   //return arrayOfStrings.sort((a,b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arrayInt = [];
   for (let i = 0; i < array1.length; i++) {
      let element = array1[i];
      if (array2.includes(element)){
         arrayInt.push(element);
      }
   }
   return arrayInt;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
