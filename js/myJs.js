let btnSearch = document.getElementById("btnSearch");
let CountryName = document.getElementById("inputCountry");

btnSearch.addEventListener("click",()=>{
    let country = CountryName.value;
    let urlAPI = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
    fetch(urlAPI).then((reply)=>reply.json()).then((db)=>{
        console.log(db[0]);

        // toLocaleString() is a format to seperate 3-digit
        showResult.innerHTML = `
                    <img src=${db[0].flags.png} class="flagCountry">
                    <h1 id = "header-det">Capital:     <span id="span-header">${db[0].capital[0]} </span></h1>
                    
                    <h1 id = "header-det">population:  <span id="span-header">${db[0].population.toLocaleString()} </span></h1> 
                    <h1 id = "header-det">Area:  <span id="span-header">${db[0].area.toLocaleString()}\(km^2\) </span></h1> 
                    <h1 id = "header-det">Languages:     <span id="span-header">${Object.values(db[0].languages).toString()} </span></h1>
                    <h1 id = "header-det">Region:     <span id="span-header">${db[0].region} </span></h1>
                    <h1 id = "header-det">Start-Of-Week:     <span id="span-header">${db[0].startOfWeek} </span></h1>
                    <h1 id = "header-det">Time Zones:     <span id="span-header">${db[0].timezones[0]} </span></h1>
                    <h1 id = "header-det">Currencies:     <span id="span-header">${db[0].currencies[Object.keys(db[0].currencies)].name} </span></h1>
                    <h1 id = "header-det">Symbol Currencies:     <span id="span-header">${db[0].currencies[Object.keys(db[0].currencies)].symbol} </span></h1>        
        
        `;


    }).catch(()=>{
        if(country.length==0){
            showResult.innerHTML = `<h2 id = "header-err">Plz a enter Country Name  </h1>`;
        }
            else{
                showResult.innerHTML = `<h1 id = "header-err"><span id="span-err">${country} </span> is not a valid Country</h1>`;
            }
    });    
    
})

