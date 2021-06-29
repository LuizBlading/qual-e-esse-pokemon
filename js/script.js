const pokemon = 'Garchomp';
let chute = document.querySelector("input");
const btn = document.querySelector('button');

chute.value = '';


// MUITO UTIL , MAS NAO PARA ESSE MOMENTO
// const draw = () => {
//     var canvas = document.querySelector("canvas");
    
//     var context = canvas.getContext("2d");
//     context.fillStyle = "black";
//     context.fillRect(0,0, canvas.width, canvas.height);
    
// }

const RevelarPoke = () => {
    $("img").css("filter", "none");
}

const confirmar = () => {

    if(pokemon == chute.value)
    {
        alert("Voce acertou!");
        RevelarPoke();
        
    } else {
        alert("Voce errou!");
      
    }
    chute.value = '';
}

btn.onclick = confirmar; 
// window.onload = draw();