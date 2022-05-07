rotulo1.innerHTML = "Ingrese la vuelta 1: ";
rotulo2.innerHTML = "Ingrese la vuelta 2: ";
rotulo3.innerHTML = "Ingrese la vuelta 3: ";
rotulo4.innerHTML = "Ingrese la vuelta 4: ";

let tomaTiempo = document.getElementById("tomaTiempo");

tomaTiempo.addEventListener("click", () => {
  //Se ingresan los tiempos de las vueltas para calcular tiempo total y promedio de vuelta
let vuelta1 : number = Number(dato1.value);
let vuelta2 : number = Number(dato2.value);
let vuelta3 : number = Number(dato3.value);
let vuelta4 : number = Number(dato4.value);

  console.log("El tiempo total es",(vuelta1+vuelta2+vuelta3+vuelta4);
  console.log("Promedio de vuelta",(vuelta1+vuelta2+vuelta3+vuelta4)/4);
});