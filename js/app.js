import Formulario from "./classForm.js"

let codigo  = document.getElementById("codigo")
formulario.addEventListener("submit", crearClase);

codigo.addEventListener(blur,()=>{validarCodigo(codigo)} )

function validarCodigo(input){
    //validar con expresiones regulares
    let patron = /^[0-9]{1,3}$/

    if(patron.test(input.value)){
        input.className = "form-control is-valid"
    }else{
        input.className = "form-control is-invalid"
    }

}


function crearClase(e) {
e.preventDefault();
console.log("crear")
const nuevoFormulario = new Formulario(
    codigo.value,
    titulo.value,
    descripcion.value,
    imagen.value,
    genero.value
)
console.log(nuevoFormulario)
}