// Alumno: Daniel Tenconi

let contenedor = document.getElementById('container');
let botonStart = document.createElement('a');
botonStart.textContent = "¿Estas listo para cotizar?";
contenedor.appendChild(botonStart);

botonStart.addEventListener('click', desplegar);

let consulta = document.getElementById('consultas');

function desplegar (){  
    botonStart.style.display = "none";
    consulta.style.display = "block";
    consulta.classList.add('mostrar')

};

// FUNCIONAMIENTO

//Clase para conformar objetos
class Cobertura {
    constructor(compania, rama, nombre,rCivil,incendio,robo,cristales,costo){
        this.compania = compania;
        this.rama = rama;
        this.nombre = nombre;
        this.rCivil = rCivil;
        this.incendio = incendio;        
        this.robo = robo;
        this.cristales = cristales;
        this.costo = costo;
    }
}

//Objetos

const smg_A = new Cobertura('SMG','Automóviles','A1',true,true,true,true,300);
const smg_B = new Cobertura('SMG','Automóviles','B1',true,true,true,false,600);
const smg_C = new Cobertura('SMG','Automóviles','C1',true,false,false,false,900);

const lma_A = new Cobertura('LMA','Automóviles','A',true,true,true,true,300);
const lma_B = new Cobertura('LMA','Automóviles','B',true,true,true,false,600);
const lma_C = new Cobertura('LMA','Automóviles','C',true,false,false,false,900);

const int_A = new Cobertura('Integrity','Automóviles','A1',true,true,true,true,300);
const int_B = new Cobertura('Integrity','Automóviles','B1',true,true,true,false,600);
const int_C = new Cobertura('Integrity','Automóviles','C1',true,false,false,false,900);


//Array : se empuja mediante "push" los objetos al "array" coberturas.
const coberturas =[]

coberturas.push(smg_A)
coberturas.push(smg_B)
coberturas.push(smg_C)
coberturas.push(lma_A)
coberturas.push(lma_B)
coberturas.push(lma_C)
coberturas.push(int_A)
coberturas.push(int_B)
coberturas.push(int_C)

console.log(coberturas);

//creando variables

class Contacto{
    constructor(nombre, dni, tel, email){
    this.nombre = nombre
    this.dni = dni
    this.tel = tel
    this.email = email
    }
}

var Lista = [];

function crearContacto () {
    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const tel = document.getElementById('tel').value;
    const email = document.getElementById('email').value;

    const nuevoContacto = new Contacto (nombre, dni, tel, email)
    Lista.push(nuevoContacto)

    //console.log(Lista)
    return Lista    
}

let Donde = document.getElementById('donde');


function imprimirContacto (){
    // se dejan asentados los errores
    let padre = document.createElement('div');
    padre.textContent= `Hola ${Lista.nombre}, le responderemos a: ${email[0]}` ;
    Donde.appendChild(padre)

}


let oki = document.getElementById('cotizar').addEventListener('click', imprimirContacto  )

