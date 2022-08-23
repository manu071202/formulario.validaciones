import {Formulario} from "./classForm.js"
let foorm  = document.getElementById("form")
let codigo  = document.getElementById("codigo")
let titulo  = document.getElementById("titulo")
let descripcion  = document.getElementById("descripcion")
let imagen  = document.getElementById("imagen")
// let genero  = document.getElementById("genero")

codigo.addEventListener("blur",()=>{validarCodigo(codigo)} )
titulo.addEventListener("blur",()=>{validarTitulo(titulo)} )
descripcion.addEventListener("blur",()=>{validarDescripcion(descripcion)} )
imagen.addEventListener("blur",()=>{validarImagen(imagen)} )
// genero.addEventListener("blur",()=>{validarGenero(genero)} )
function validarCodigo(input){
    //validar con expresiones regulares
    let patron = /^[0-9]{3,6}$/
    
    if(patron.test(input.value)){
        input.className = "form-control is-valid"
    }else{
        input.className = "form-control is-invalid"
    }    
}

function validarTitulo(input){
let patron = /^[\s\S]{3,30}$/

if(patron.test(input.value)){
    input.className = "form-control is-valid"
}else{
    input.className = "form-control is-invalid"
}

}

function validarDescripcion(input){
    let patron = /^[\s\S]{0,300}$/
    
    if(patron.test(input.value)){
        input.className = "form-control is-valid"
    }else{
        input.className = "form-control is-invalid"
    }
    
    }

    function validarImagen(input){
        let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
        
        if(patron.test(input.value)){
            input.className = "form-control is-valid"
        }else{
            input.className = "form-control is-invalid"
        }
        
        }
    
        // function validarGenero(input){
        //      let patron = "/^[\s\S]{0,300}$/"
        //     if(patron.test(input.value)){
        //         input.className = "form-control is-valid"
        //     }else{
        //         input.className = "form-control is-invalid"
        //     }
            
        //     }




foorm.addEventListener("submit", crearClase);
function crearClase(e) {
e.preventDefault();

const nuevoFormulario = new Formulario(
    codigo.value,
    titulo.value,
    descripcion.value,
    imagen.value,
    genero.value
)
console.log(nuevoFormulario)
}