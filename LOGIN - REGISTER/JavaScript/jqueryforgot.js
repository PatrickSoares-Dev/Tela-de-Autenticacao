$(document).ready(function(){
    $("#form").validate({
        rules:{
            email2: {
                required: true,
                email: true
            }       
        },
        messages: {
            email2: {
                required: "Esse campo é obrigatório",
                email: "Formato de email inválido",
            }
        }
    })
})