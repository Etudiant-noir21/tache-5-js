const APIKEY = '2d360dc144ebf07104fa69d495aa9ed5';
// appel a l'API openwhathers avec ville en paramettre de fonction
let apicall = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) =>
response.json().then((data) => {
    console.log(data);
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = '<i class="bi bi-thermometer"></i>'
     + data.main.temp + '°C';
    document.querySelector('#humidity').innerHTML = '<i class="bi bi-droplet"></i>'
     + data.main.humidity + '%';
    document.querySelector('#wind').innerHTML = 
    '<i class="bi bi-wind"></i>' + data.wind.speed + 'km/h';
})
).catch(err => console.log('erreur :' + err));
}
// ecouteur d'evennement sur la soumission du formulaire
document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
   let ville = document.querySelector('#inputcity').value;
   apicall(ville);
})
