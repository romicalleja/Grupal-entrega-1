function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
var password1 = document.getElementById("password1")
      , Password2 = document.getElementById("confirm2");
function validarRegistro(){
    if (password1.value!=Password2.value) 
        return showAlertError()
        else if
        (document.getElementById('terminos').checked===false)
        return showAlertError()
        else
        showAlertSuccess()          
    }
<<<<<<< HEAD
    <button onclick="ValidarRegistro()">Click</button>
=======
    document.getElementById("regBtn").onclick = validarRegistro() 
>>>>>>> b2f2e263c816504a22911f41590e22c6c2da8ca1
