const registro = document.getElementById("regBtn");


var name1 = document.getElementById("nombre");
var ape = document.getElementById("apellido");
var mail = document.getElementById("email");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");

function validarRegistro(){
    if (password1.value != password2.value) 
        return showAlertError()
        else if
        (document.getElementById('terminos').checked===false)
        return showAlertError()
        else if
        (requeridos()==false)
        return showAlertError()
        else
        return  showAlertSuccess()          
    }

function requeridos(){
    if (name1.value.length == 0)
    return false
    else if (ape.value.length == 0)
    return false
    else if(mail.value.lenth == 0)
    return false
    else
    return true
}

    
   registro.addEventListener("click", () => {
             validarRegistro() 
          });
          
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


