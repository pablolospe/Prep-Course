// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arr = []
  for (const props in objeto){
    arr.push([props, objeto[props]])
  }
  return arr
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var arr = string.split("");
  var objeto = {}
  for (var i = 0; i < arr.length; i++){
    if (objeto[arr[i]]){
      objeto[arr[i]]++
    } else {
      objeto[arr[i]]=1
    }
  } 
  return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  function upper(letra){
    return letra === letra.toUpperCase()
  }

  function lower(letra){
    return letra === letra.toLowerCase()
  }
  var up = []
 
  for (var i = 0; i < s.length; i++){
    if (upper(s[i])) {
      up.push(s[i])
    }
  }
  for (var i = 0; i < s.length; i++){
    if (lower(s[i])) {
      up.push(s[i])
    }
  }
  return up.join("")
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  function reverse(s){
    return s.split("").reverse().join("");
}
  str = str.split(" ")
  var result = []
  
  for (var i = 0; i < str.length; i++){
    str[i] = reverse(str[i])
    result.push(str[i])
  }
  return result.join(" ")
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero = numero.toString()
  var mitad1 = "x"
  var mitad2 = "x"

  for (var i = 0; i<numero.length/2; i++){
    mitad1 = mitad1 + numero[i]
  }
  for (var i = numero.length-1; i >= numero.length/2; i--){
    mitad2 = mitad2 + numero[i]
  }

  if (mitad1.length != mitad2.length){
    mitad1 = mitad1.slice(0, -1); 
  }
console.log(mitad1)  
console.log(mitad2)
  if (mitad1===mitad2){
    return "Es capicua"
  }
  else {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var arr = cadena.split("");
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === "a" || arr[i] === "b" || arr[i] === "c"){
      arr.splice(i,1);
      i--
    }
  }
  return arr.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  return arr.sort(function(a, b) {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return 0
  })
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var result=[]
  for (var i = 0; i< arreglo1.length; i ++){
    for (var j = 0; j< arreglo2.length; j ++){
      if (arreglo1[i]===arreglo2[j]){
        result.push(arreglo1[i])
      }     
    }   
  }
return result
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

