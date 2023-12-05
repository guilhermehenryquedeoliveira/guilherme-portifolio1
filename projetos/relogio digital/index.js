const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const modal = document.querySelector(".modal")
const h1 = document.querySelector("h1")

const relogio = setInterval( ()=> {

    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10)min = '0' + min;
    if(sec < 10)sec = '0' + sec;

    // h1.addEventListener("click", ()=>{

    //       modal.classList.add("show");  

     

    // });
    
    // h1.addEventListener('dblclick', ()=>{
    //     modal.classList.remove("show");  
    // }) 
   
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
});

// const horas = document.getElementById('horas');
// const minutos = document.getElementById('minutos');
// const segundos = document.getElementById('segundos');

// const relogio = setInterval( ()=> {

//     let dateToday = new Date();

//     let hr = dateToday.getHours();
//     let min = dateToday.getMinutes();
//     let sec = dateToday.getSeconds ();

//     if (hr < 10) hr = '0' + hr;
//     if (min < 10) min = '0' + min;
//     if (sec < 10) sec = '0' + sec;

//     horas.textContent = hr;
//     minutos.textContent = min;
//     segundos.textContent = sec;

// });