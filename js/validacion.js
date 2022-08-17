const registro = document.getElementById("regBtn");



var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");

function validarRegistro(){
    if (password1.value != password2.value) 
        return showAlertError()
        else if
        (document.getElementById('terminos').checked===false)
        return showAlertError()
        else
        showAlertSuccess()          
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


