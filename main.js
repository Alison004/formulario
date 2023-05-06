// prompt("Hola soy alison")
// alert("Hola soy alison estoy en la clase")


// var numero1 = prompt("Introduce un numero");
// var numero1 = prompt("Introduce otro numero");

// var resultado =  parseInt(numero1) + parseInt(numero2);
// alert("El resultado es: " + resultado);



// let numero1 = 5;
// let numero2 = 10;

// let resultado = numero1 + numero2;
// console.log("resultado: " , resultado)  



// console.log("hola mundo ")



const form = document.querySelector("form")
const input = document.getElementById("btn")


input.addEventListener("click", (e) => {
e.preventDefault();
  console.log(form.elements[0].value);
  console.log(form.elements[1].value);
 
  const nombre = form.elements[0].value;
  const contraseña = form.elements[1].value;


  if( nombre === "admin" && contraseña === "1234") {
   return window.open("https://alison004.github.io/clase-29-numero-2/")
    return alert("Bienbenido"); 

  }else{
 return alert("Datos incorrectos");
}

});

// console.log({form, input}) 

