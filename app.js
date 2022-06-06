//cuando el usuario presiona el botón "buttonClick" se crea el constructor persona,
//obteniendo su nombre y lo que gastó, y llevándo esos datos a un objeto. Posteriormente
//se ejecuta una función "addExpense"
function buttonClick(){
    //constructor
    function persona(nombre, gasto){
        this.nombre=nombre;
        this.gasto=gasto;
    }
    var get_nombre = document.getElementById("nombre").value;
    var get_gasto = document.getElementById("gasto").value;
    //variable global (sin var)
    nueva_persona = new persona(get_nombre, get_gasto);
    addExpense();

   /* let total = 0, prom = 0;
    total += get_gasto;
    let prom=0;
    prom = total/ */
}

var array_datos = [];

function addExpense(){
    array_datos.push(nueva_persona);
    document.getElementById("tabla").innerHTML += '  <tbody><td>'+nueva_persona.nombre+'</td><td>'+nueva_persona.gasto+'</td></tbody>';

}



