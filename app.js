//cuando el usuario presiona el botón "buttonClick" se crea el constructor persona,
//obteniendo su nombre y lo que gastó, y llevándo esos datos a un objeto. Posteriormente
//se ejecuta una función "addExpense"

var acu = 0;
var promedio = 0;

function buttonClick(){
    //constructor
    function persona(nombre, gasto){
        this.nombre=nombre;
        this.gasto=gasto;
    }
    var get_nombre = document.getElementById("nombre").value;
    var get_gasto = document.getElementById("gasto").value;
    
    acu += get_gasto;
    console.log(acu);
    //variable global (sin var)
    nueva_persona = new persona(get_nombre, get_gasto);

    addExpense();
}


var array_datos = [];

function addExpense(){

    array_datos.push(nueva_persona);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nueva_persona.nombre+'</td><td>'+nueva_persona.gasto+'</td></tbody>';
}

var result_gastos = document.getElementById("result_gastos");
console.log(acu);
result_gastos.innerHTML='Total: $'+acu; 

var prom = document.getElementById("prom");
prom.innerHTML='Debe pagar c/u: $'+promedio;
