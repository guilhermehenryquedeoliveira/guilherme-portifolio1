const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const peso = document.getElementById('weight').value;

    const altura = document.getElementById('height').value;

    const imc = peso / (altura ^ 2);

    const campoImc = document.getElementById('value'); //aonde aparece o IMC

    let descricao;
    campoImc.classList.add('attention');



    document.getElementById('infos').classList.remove('hidden');

   

    if (imc < 17) {
        descricao = (`Cuidado! Você está muito abaixo do peso!`)
        campoImc.style.color = "yellow";
    }
    else if ((imc >= 18.5) && (imc <= 25)) {
        descricao = "você está no peso ideal  ^_^"
        campoImc.style.color = "green";
    }

    else if((imc>25)&&(imc<=30)){
    descricao = "! cuidado, você está com sobrepeso !";
   
    campoImc.style.color = "yellow";
    }


    else if((imc >30)&&(imc<=35)){
    descricao = "!! cuidado você está com obesidade moderada !!" 
    campoImc.style.color = "orange";
    }


    else if((imc>35)&&(imc<=40)){
    descricao = "!!! cuidado você está com obesidade severa !!!"
    campoImc.style.color = "red";
    }


    else{
descricao = "!!!! cuidado você está com obesidade morbida !!!!"
campoImc.style.color = "red";
    }




   

 campoImc.textContent = imc.toFixed(2);

    document.getElementById('description').textContent = descricao;

});