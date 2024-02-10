const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordIpunt = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu email")
        return;
    }

    if(!validatePassorwd(passwordIpunt.value, 8)){
        alert("A senha precisa de no minimo, 8 digitos!")
        return;
    }

    if(jobSelect.value ===""){
        alert("Por favor, selecione a sua situação");
        return;
    }

    if(messageTextarea.value === ""){
        alert("Por favor, preencha ou escreva a mensagem")
    }


    form.submit();
})

function isEmailValid(email){
 
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true; 
    }

    return false;
}

function validatePassorwd(password, minDigits) {
    if(password.length >= minDigits){
        return true
    }

    return false
}

//o que eu aprendi

//para criar uma validacao basta voce criar um sistema de condicao, onde ele ira retorna para voce se tal area esta corretamente preenchida ou nao. (usa sistema de if, function que ira validar se aquele espaco atende tais caracteristicas.)

//regExp: ele estabelce um padrao que deve ser seguido ao escrever. muito bom para enserir email. 

//construcao do if com a funcao
//segue meu raciocinio. para validar o email, criou se uma function, nela tinha a validacao regexp, mas para informar se esta correto, criou se uma condicao que pegou a funcao, junto com o teste e em cima do email, ele vai certificar se esta corrote. se estiver correto, ele retornara true e assim passara pela validaçao