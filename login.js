/* Variáveis animação */

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
const signin = document.querySelector(".signin-signup")
const signup = document.querySelector(".sign-up-form")

/* Animação do painel */

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  signin.setAttribute('style', 'overflow-y: scroll;');

});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  signin.removeAttribute('style', 'position: fixed;')
  signup.removeAttribute('style', 'margin-left: 40rem')
});

sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
  signin.setAttribute('style', 'overflow-y: scroll;');
});

sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
  signin.removeAttribute('style', 'position: fixed;')
  signup.removeAttribute('style', 'margin-left: 40rem')
});



/* Validação */

/* Variáveis input */

let loginre = document.querySelector('#loginre')
let nome = document.querySelector('#nome');
let data = document.querySelector('#data');
let cpf = document.querySelector('#cpf');
let mae = document.querySelector('#mae');
let email = document.querySelector('#email');
let celular = document.querySelector('#celular');
let cep = document.querySelector('#cep')
let cidade = document.querySelector('#cidade');
let logradouro = document.querySelector('#logradouro');

let password2 = document.querySelector('#password2');
let csenha = document.querySelector('#csenha');

let msgError = document.querySelector('#msgerror');
let msgSucess = document.querySelector('#msgsucess');

/* Variáveis Label */

let labelloginre = document.querySelector('#labelloginre');
let labelcep = document.querySelector('#labelcep');
let labelcidade = document.querySelector('#labelcidade');
let labellogradouro = document.querySelector('#labellogradouro')
let labelnome = document.querySelector('#labelnome');
let labeldata = document.querySelector('#labeldata');
let labelcpf = document.querySelector('#labelcpf');
let labelmae = document.querySelector('#labelmae');
let labelemail = document.querySelector('#labeemail');
let labelcelular = document.querySelector('#labelcelular');


let labelpassword2 = document.querySelector('#labelpassword2');
let labelcsenha = document.querySelector('#labelcsenha');

/* Variáveis Valid */

let validLoginre = false
let validCep = false
let validNome = false
let validData = false
let validCpf = false


let validMae = false
let validEmail = false
let validCelular = false
let validCidade = false
let validLogradouro = false
let validPassword2 = false
let validCsenha = false




/* Validação */

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 10){
    labelnome.setAttribute('style', 'color: #ff0f27')
    labelnome.setAttribute('style', 'display: block')
    labelnome.innerHTML = '* O nome deve ter no minimo 10 caracteres'
    validNome = false
  }  
  else{
    labelnome.removeAttribute('style', 'display: block')
    validNome = true

  }
})

data.addEventListener('keyup', () => {
  if (data.value.length < 10){
    labeldata.setAttribute('style', 'color: #ff0f27')
    labeldata.setAttribute('style', 'display: block')
    labeldata.innerHTML = '* Formato inválido: 00/00/0000'
    validData = false
  } else{
    labeldata.removeAttribute('style', 'display: block')
    validData = true
  }
})

cpf.addEventListener('keyup', () => {
  if (cpf.value.length < 14){
    labelcpf.setAttribute('style', 'color: #ff0f27')
    labelcpf.setAttribute('style', 'display: block')
    labelcpf.innerHTML = ''
    validCpf = false
  } else{
    labelcpf.removeAttribute('style', 'display: block')
    validCpf = true
  }
})

cep.addEventListener('keyup', () => {
  if (cep.value.length < 8){
    labelcep.setAttribute('style', 'color: #ff0f27')
    labelcep.setAttribute('style', 'display: block')
    labelcep.innerHTML = 'Insira um CEP Válido'
    validCep = false
  } else{
    labelcep.removeAttribute('style', 'display: block')
    validCep = true
  }
})


mae.addEventListener('keyup', () => {
  if (mae.value.length < 10){
    labelmae.setAttribute('style', 'color: #ff0f27')
    labelmae.setAttribute('style', 'display: block')
    labelmae.innerHTML = '* O nome mãe deve ter no minimo 15 caracteres'
    validMae = false
  } else{
    labelmae.removeAttribute('style', 'display: block')
    validMae = true
  }
})

loginre.addEventListener('keyup', () => {
  if (loginre.value.length < 8){
    labelloginre.setAttribute('style', 'color: #ff0f27')
    labelloginre.setAttribute('style', 'display: block')
    labelloginre.innerHTML = '* O login deve ter no minimo 8 caracteres'
    validLoginre = false
  } else{
    labelloginre.removeAttribute('style', 'display: block')
    validLoginre = true
  }
})


email.addEventListener('keyup', () => {
  if (email.value.length < 10) {
    labelemail.setAttribute('style', 'color: #ff0f27')
    labelmae.setAttribute('style', 'display: block')
    labelmae.innerHTML = '* Email inválido'
    validEmail = false
  } else{
    labelmae.removeAttribute('style', 'display: block')
    validEmail = true
  }
})

celular.addEventListener('keyup', () => {
  if (celular.value.length < 15) {
    labelcelular.setAttribute('style', 'color: #ff0f27')
    labelcelular.setAttribute('style', 'display: block')
    labelcelular.innerHTML = '* Celular inválido'
    validCelular = false
  } else{
    labelcelular.removeAttribute('style', 'display: block')
    validCelular = true
  }
})

password2.addEventListener('keyup', () => {
  if (password2.value.length < 8) {
    labelpassword2.setAttribute('style', 'color: #ff0f27')
    labelpassword2.setAttribute('style', 'display: block')
    labelpassword2.innerHTML = '* A senha deve ter no minimo 8 caracteres'
    validPassword2 = false
  } else{
    labelpassword2.removeAttribute('style', 'display: block')
    validPassword2 = true
  }
})

password2.addEventListener('keyup', () => {
  if (password2.value.length < 8) {
    labelpassword2.setAttribute('style', 'color: #ff0f27')
    labelpassword2.setAttribute('style', 'display: block')
    labelpassword2.innerHTML = '* A senha deve ter no minimo 8 caracteres'
    validPassword2 = false
  } else{
    labelpassword2.removeAttribute('style', 'display: block')
    validPassword2 = true
  }
})

csenha.addEventListener('keyup', () => {
  if (csenha.value != password2.value) {
    labelcsenha.setAttribute('style', 'color: #ff0f27')
    labelcsenha.setAttribute('style', 'display: block')
    labelcsenha.innerHTML = '* As senhas não conferem'
    validCsenha = false
  } else{
    labelcsenha.removeAttribute('style', 'display: block')
    validCsenha = true
  }
})

/* Validação */

function validate(){
  if (validNome && validData && validMae && validEmail && validCelular && validPassword2 
  && validCsenha && validCpf && validCep){
    
    /* LocalStorage */

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
    {
      nomeCad: nome.value,
      date: data.value,
      cpf: cpf.value,
      mae: mae.value,
      email: email.value,
      celular: celular.value,
      cep: cep.value,
      senhaCad: password2.value,
      userCad: loginre.value

    }
  )

    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    


    msgSucess.setAttribute('style', 'display: block')
    msgSucess.innerHTML = ' Cadastrando usuário... '

    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(() => {
      window.location.href = ('./login.html')
    }, 3000)
    

  } else{
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Preencha todos os campos'
  }
}

 /* LocalStorage Login Validate */

function entrar (){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')

  let senha = document.querySelector('#senha')
  let userSenha = document.querySelector('#senhaLabel')

  let msgError1 = document.querySelector('#msgerror1')
  let msgSucess1 = document.querySelector('#msgsucess1')
  let listaUser = []

  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) =>{
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad
      }
    }
  })
  if (usuario.value == userValid.user && senha.value == userValid.senha){
    msgError1.setAttribute('style', 'display: none')
    msgSucess1.setAttribute('style','display: block')
    msgSucess1.innerHTML = ('Seja bem vindo ' + userValid.user + '!'  )

    setTimeout(() => {
      window.location.href = ('./login.html')
    }, 3000)

    let token = Math.random().toString(16).substring(2)
    localStorage.setItem('token', token) 

  } else{
    msgError1.setAttribute('style', 'display: block')
    msgError1.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  } 
}

/* Mascara CPF*/

const input = document.getElementById('cpf')
input.addEventListener('keypress', () => {
  let inputLength = cpf.value.length

  if (inputLength == 3 || inputLength == 7) {
    cpf.value += '.'
  } else if (inputLength == 11) {
    cpf.value += '-'
  }
})

/* Eye para ver senha*/

function eye() {
  var x = document.getElementById("senha");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");

  if (x.type === 'password') {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  }
  else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}

/* Mascará de Telefone, Celular e Data*/

const masks = {

  phone(value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  },

  phone1(value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  },
  date(value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\/\d{2})(\d)/, '$1/$2')
      .replace(/(\/\d{4})\d+?$/, '$1')
  },

}

document.querySelectorAll('input').forEach($input => {
  const field = $input.dataset.js

  $input.addEventListener('input', e => {
    e.target.value = masks[field](e.target.value)
  }, false)
})

/* Impedir numeros nos input*/

var inputNome = document.querySelector("#nome");
nome.addEventListener("keypress", function (e) {
  var keyCode = (e.keyCode ? e.keyCode : e.which);

  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

var inputCpf = document.querySelector("#cpf");
cpf.addEventListener("keypress", function (e) {
  var keyCode = (e.keyCode ? e.keyCode : e.which);

  if (keyCode > 32 && keyCode < 44) {
    e.preventDefault();
  }
});


var inputPai = document.querySelector("#pai");
pai.addEventListener("keypress", function (e) {
  var keyCode = (e.keyCode ? e.keyCode : e.which);

  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});


var inputMae = document.querySelector("#mae");
mae.addEventListener("keypress", function (e) {
  var keyCode = (e.keyCode ? e.keyCode : e.which);

  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

/* API CEP*/

$("#btncep").on("click", function () {
  var numCep = $("#cep").val();
  var url = "https://viacep.com.br/ws/" + numCep + "/json";

  $.ajax({
    url: url,
    type: "get",
    dataType: "json",

    success: function (dados) {
      console.log(dados);
      $("#uf").val(dados.uf);
      $("#cidade").val(dados.localidade);
      $("#logradouro").val(dados.logradouro);
      $("#bairro").val(dados.bairro);
    }
  })

})

/* DarkMode*/

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')

})

document.getElementById('chk')
addEventListener('click', function () {
  document.querySelector('body')
  setAttribute("class", "dark")
})

/* Validação CPF Digito Verificador*/

function validaCpf(retorno) {
  if (retorno == true) {

    cpf.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
    $(cpf).css("color", 'green')
    $(cpfvalid).css('display', 'block')
    $(cpfinvalid).css('display', 'none');
    setAttribute('class')
    validCpf = true

  } else {
    $(cpf).css("color", 'red');
    $(cpfinvalid).css('display', 'block');
    $(cpfvalid).css('display', 'none');
    validCpf = false
  }
}

function TestaCPF(strCPF) {

  str = strCPF.replace('.', '').replace('.', '').replace('-', '');
  var cpfmask = str;
  var Soma;
  var Resto;
  Soma = 0;
  if (cpfmask == "00000000000" || cpfmask == "11111111111" || cpfmask == "22222222222" || cpfmask == "33333333333" || cpfmask == "44444444444" || cpfmask == "55555555555" || cpfmask == "66666666666" || cpfmask == "77777777777" || cpfmask == "88888888888" || cpfmask == "99999999999")
    return false;

  for (i = 1; i <= 9; i++) Soma = Soma + parseInt(cpfmask.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(cpfmask.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfmask.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(cpfmask.substring(10, 11))) return false;
  return true;

}


