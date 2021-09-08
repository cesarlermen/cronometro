window.onload = function(){
    var adicionarMinutos = document.getElementById('minutos')
    var adicionarSegundos = document.getElementById('segundos')
    var adicionarCentesimos = document.getElementById('centesimos')
    var adicionarParciais = document.getElementById('parciais')

    var botaoIniciar = document.getElementById('botao-iniciar')
    var botaoZerar = document.getElementById('botao-zerar')
    var botaoParcial = document.getElementById('botao-parcial')


    var centesimos = 00
    var segundos = 00
    var minutos = 00
    var parcial
    var intervalo
    botaoIniciarPosicao = "iniciar"

    botaoIniciar.onclick = function (){
        if (botaoIniciarPosicao == "iniciar"){
            botaoIniciarPosicao = "pause"
            botaoIniciar.innerHTML = "Pause"
            clearInterval(intervalo);
            intervalo = setInterval(iniciarCronometro, 10);
        }else if (botaoIniciarPosicao == "pause"){
            botaoIniciarPosicao = "iniciar"
            botaoIniciar.innerHTML = "Continuar"
            clearInterval(intervalo);
        }

    }

    botaoZerar.onclick = function(){
        clearInterval(intervalo)
        centesimos = "00"
        segundos = "00"
        minutos = "00"
        adicionarCentesimos.innerHTML = centesimos
        adicionarSegundos.innerHTML = segundos
        adicionarMinutos.innerHTML = minutos
        botaoIniciarPosicao = "iniciar"
        botaoIniciar.innerHTML = "Iniciar"
        adicionarParciais.innerHTML = ''
    }

    botaoParcial.onclick = function(){
        if (botaoIniciar.innerHTML == "Iniciar"){
            alert ('O cronômetro deve ser iniciado para gerar parciais.') 
        }else{
            parcial = `<br>${minutos}:${segundos}:${centesimos}`
            adicionarParciais.innerHTML += parcial
        }
    }

    function iniciarCronometro () {
        centesimos++; 
        
        if(centesimos <= 9){
        adicionarCentesimos.innerHTML = "0" + centesimos
        }
        
        if (centesimos > 9){
        adicionarCentesimos.innerHTML = centesimos
        }

        if (centesimos > 99){
            segundos ++
            adicionarSegundos.innerHTML = "0" + segundos
            centesimos = 0
            adicionarCentesimos.innerHTML = "0" + centesimos
        }

        if (segundos > 9){
            adicionarSegundos.innerHTML = segundos
        }

        if (segundos > 59){
            minutos ++
            adicionarMinutos.innerHTML = "0" + minutos
            segundos = 0
            adicionarSegundos.innerHTML = "0" + segundos
        }

        if (minutos > 9){
            adicionarMinutos.innerHTML = minutos
        }
    }
}