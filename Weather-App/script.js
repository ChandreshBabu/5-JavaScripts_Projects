const api_key = "3265874a2c77ae4a04bb96236a642d2f";

let search = document.getElementById('search');
let form = document.getElementById('form');
let main = document.getElementById('main');

const url = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

async function getwetherbylocation(location){
    const resp = await fetch(url(location), {origin: "cors"});

    const respdata = await resp.json();

    // console.log(respdata);

    printdata(respdata);

}
getwetherbylocation(location);


function printdata(data){

    const temprature = KtoC(data.main.temp);

    const wether = document.createElement("div");
    wether.classList.add("wether");
    wether.innerHTML = `<h2><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">${temprature}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></h2><small>${data.weather[0].main}</small>`;

    main.innerHTML="";
    main.appendChild(wether);

}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const city = search.value;

    if(city){
        getwetherbylocation(city);
        search.value = null;
    }
});