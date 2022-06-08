//cuando el usuario presiona el botón "buttonClick" se crea el constructor persona,
//obteniendo su nombre y lo que gastó, y llevándo esos datos a un objeto. Posteriormente
//se ejecuta una función "addExpense"

let acu=0;
let cont=0;
let promedio=0;

function buttonClick(){
    //constructor
    function persona(nombre, gasto){
        this.nombre=nombre;
        this.gasto=gasto;
    }
    var get_nombre = document.getElementById("nombre").value;
    var get_gasto = parseInt(document.getElementById("gasto").value);
    acu += parseInt(document.getElementById("gasto").value);
    cont++;
    promedio=acu/cont;
    //variable global (sin var)
    nueva_persona = new persona(get_nombre, get_gasto);
    addExpense();

    document.getElementById("result_gastos").innerHTML = "El total es: $"+acu;

    document.getElementById("prom").innerHTML = "Debe pagar c/u: $" + promedio;

}

var array_datos = [];

function addExpense(){

    array_datos.push(nueva_persona);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nueva_persona.nombre+'</td><td>'+nueva_persona.gasto+'</td></tbody>';
}

