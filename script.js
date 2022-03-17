document.getElementById("botao").addEventListener("click", validaformulario)

function validaformulario(){
    if(document.getElementById("nomeusuaria").value != "" &&
    document.getElementById("emailusuaria").value != "" &&
    document.getElementById("telefoneusuaria").value != ""){
        alert("Pronto! Você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha todos os campos.")
    }
}


