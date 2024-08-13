class Persona {
    constructor(nombre, edad, genero, anioNac) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.anioNac = anioNac;
    }

    mostrarGeneracion() {
        if (this.anioNac >= 1946 && this.anioNac <= 1964) {
            return "Baby Boomer";
        } else if (this.anioNac >= 1965 && this.anioNac <= 1980) {
            return "Generación X";
        } else if (this.anioNac >= 1981 && this.anioNac <= 1996) {
            return "Millennial";
        } else if (this.anioNac >= 1997 && this.anioNac <= 2012) {
            return "Generación Z";
        } else {
            return "Generación Desconocida";
        }
    }

    esMayorDeEdad() {
        return this.edad >= 18;
    }
}

let persona;

document.getElementById('crearPersona').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const genero = document.getElementById('genero').value;
    const anioNac = document.getElementById('anioNac').value;
    if (nombre && !isNaN(edad) && genero) {
        persona = new Persona(nombre, edad, genero,anioNac);
        alert(`Persona creada:\nNombre: ${persona.nombre}\nEdad: ${persona.edad}\nGénero: ${persona.genero}\nAño de nacimiento: ${persona.anioNac}`);
    } else {
        alert('Completar todos los campos');
    }
});

document.getElementById('mostrarGeneracion').addEventListener('click', function() {
    if (persona) {
        alert(`Generación: ${persona.mostrarGeneracion()}`);
    } else {
        alert('Primero  debes crear una persona');
    }
});

document.getElementById('esMayorDeEdad').addEventListener('click', function() {
    if (persona) {
        const esMayor = persona.esMayorDeEdad() ? "Sí, es mayor de edad." : "No, no es mayor de edad.";
        alert(esMayor);
    } else {
        alert('Primero  debes crear una persona');
    }
});