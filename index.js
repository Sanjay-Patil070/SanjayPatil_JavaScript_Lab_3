let searchBox=document.getElementById('search');
searchBox.addEventListener("keypress",(event)=>{
    if(event.keyCode==13){
        callApi(searchBox.value)
    }
})
function callApi(place){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2`

    fetch(url)
    .then(res=>res.json())
    .then(dat=> displayData(dat))
    .catch(err=>console.log(err))
}

function displayData(res){
    console.log(res)

    let city=document.querySelector('.cityName');
    let dateField=document.querySelector('.date');
    let temp=document.querySelector('.temp');
    let weathers=document.querySelector('.weathers');
    let highLowTemp=document.querySelector('.hi-low');

    city.innerText=res.name +" ," + res.sys.country
    temp.innerText=Math.round(res.main.temp) +"°C"
    weathers.innerText=res.weather[0].main
    highLowTemp.innerText=Math.round(res.main.temp_min )+ "°C /" +Math.round(res.main.temp_max) +"°C"
    dateField.innerText=formDate()
}

function formDate(){
   // Thursday, 4 march 2022
    let months=["January","February","March","April","May","June","July","August","Septmber","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuarday"];

    let todaysDate=new Date();
    let day=days[todaysDate.getDay()];
    let month=months[todaysDate.getMonth()];
    let year=todaysDate.getFullYear();
    let date=todaysDate.getDate();
    return `${day},${date} ${month} ${year}`;
}