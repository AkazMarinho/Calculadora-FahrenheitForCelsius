
const valorFahrenheit = document.querySelector("#inputFahrenheit");

var x;

function toCelsius(fahrenheit){
     x = (5 / 9) * (fahrenheit - 32);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    //console.log("enviu form");

    const valorInput = valorFahrenheit.value;

    if(valorInput){
        toCelsius(valorInput);
    }

    document.getElementById("demo").innerHTML = x.toFixed(2);
})