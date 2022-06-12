function adivinhaFuturo(){
   
   //Lista de perguntas 
    let adivinha = ["Sinais apontam que sim." , 
    "Você pode contar com isso.", 
    "Concentre-se e pergunte novamente.", 
    "Tudo indica que sim.", 
    "Depende das suas escolhas futuras." ]

    //Recebendo input 
    let res = document.querySelector('.res')
    let pergunta = document.querySelector('.pergunta')
    let botao = document.querySelector('#botao')

    
    //validação do campo de pergunta 
    if(pergunta.value == ""){

        alert("Campo vazio! Insira sua pergunta")
        return
    }

    botao.setAttribute("disabled" , true)

    //Gerar frase aleatória 
    fraseAleatoria = adivinha.length
    let adivinhou = Math.floor(Math.random() * fraseAleatoria)

    perguntaInput = "<div>" + pergunta.value + "</div>"

    res.innerHTML = perguntaInput + adivinha[adivinhou]

    res.style.opacity = 1

    setTimeout(function(){
         res.style.opacity = 0;   
         botao.removeAttribute('disabled')
    }, 3000)
   
}
