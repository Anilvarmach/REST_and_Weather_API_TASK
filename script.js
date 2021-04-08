
function displyData(CountryData) {
  data = CountryData;
  data.forEach((obj) => {
    var col = createBootstrapCard("div", "col-lg-3 col-md-6 col-sm-12 mb-4 ");

    var card = createBootstrapCard("div", "card h-100");

    var cardBody = createBootstrapCard("div", "card-body");

    var img = createBootstrapCard("img", "card-img-top");
    img.setAttribute("src", obj.flag);
    var a = createBootstrapCard("a");
    a.append(img);

    var h4 = createBootstrapCard("h4", "card-title");
    h4.innerHTML = `<span>Country:</span> ${obj.name}`;

    var pTag1 = createBootstrapCard("p", "card-text");
    pTag1.innerHTML = `<span>Capital:</span> ${obj.capital}`;

    var pTag2 = createBootstrapCard("p", 'card-text');
    pTag2.innerHTML = `<span>CallingCodes:</span> ${obj.callingCodes}`;


    var pTag3 = createBootstrapCard("p", "card-text");
    pTag3.innerHTML = `<span>Time-Zone:</span> ${obj.timezones}`;

    var pTag4 = createBootstrapCard("p", "card-text");
    pTag4.innerHTML = `<span>TopLevelDomain:</span> ${obj.topLevelDomain}`;

    var pTag5 = createBootstrapCard("p", "card-text");
    pTag5.innerHTML = `<span>AltSpellings:</span> ${obj.altSpellings}`;

    var pTag6 = createBootstrapCard("p", "card-text");
    pTag6.innerHTML = `<span>Region:</span> ${obj.region}`;

    var pTag7 = createBootstrapCard("p", 'card-text');
    pTag7.innerHTML = `<span>Subregion:</span> ${obj.subregion}`;

    var pTag8 = createBootstrapCard("p", 'card-text');
    pTag8.innerHTML = `<span>Population:</span> ${obj.population}`;

    var pTag9 = createBootstrapCard("p", 'card-text');
    pTag9.innerHTML = `<span>Area:</span> ${obj.area}`;

    var pTag10 = createBootstrapCard("p", 'card-text');
    pTag10.innerHTML = `<span>Borders:</span> ${obj.borders}`;

    var pTag11 = createBootstrapCard("p", 'card-text');
    pTag11.innerHTML = `<span>NativeName:</span> ${obj.nativeName}`;

    var pTag12 = createBootstrapCard("p", 'card-text');
    pTag12.innerHTML = `<span>NumericCode:</span> ${obj.numericCode}`;

    var pTag13 = createBootstrapCard("p", 'card-text');
    pTag13.innerHTML = `<span>Currencie-Code:</span> ${obj.currencies[0].code} <br> <span>Currencie-Name:</span> ${obj.currencies[0].name} <br> <span>Currencie-symbol:</span> ${obj.currencies[0].symbol} `;

    var pTag14 = createBootstrapCard("p", 'card-text');
    pTag14.innerHTML = `<span>Languages:</span> ${obj.languages[0].name} <br> <span>Native Languages</span>: ${obj.languages[0].nativeName}`;

    var pTag15 = createBootstrapCard('p', 'card-text');
    pTag15.innerHTML = `<span>Latitude:</span> ${obj.latlng[0]} <br> <span>longitude:</span> ${obj.latlng[1]} `;

    cardBody.append(h4, pTag1, pTag2, pTag3, pTag4, pTag5,pTag6,pTag7,pTag8,pTag9,pTag10,pTag11,pTag12,pTag13,pTag14,pTag15);

    var cardFooter = createBootstrapCard("div", "card-footer");
    var btn = createBootstrapCard('a', 'btn btn-primary show-modal');
    btn.innerHTML = 'See Weather';
    btn.setAttribute('onclick', `weather(${obj.latlng[0]},${obj.latlng[1]})`);
   
    
    cardFooter.append(btn)
    card.append(a, cardBody, cardFooter);
    col.append(card);
    row.append(col);
  });
}

var row = document.querySelector("#row");
function createBootstrapCard(elemName, elemClass = "", elemId = "") {
var element = document.createElement(elemName);
element.setAttribute("class", elemClass);
element.setAttribute("id", elemId);
return element;
}


fetch("https://restcountries.eu/rest/v2/all")
.then((res) => res.json())
.then((data) => {
  displyData(data);
})
.catch((err) => console.log("Error:", err));


function weather(lat, lang) {
  let key = "c4c126e45f678c772acc47811c86732b";
  let url = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=${key}`
  );
  url
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert(`
          Country Name- ${data.name}
          Temperature - ${data.main.temp} Cel
          Humidity - ${data.main.humidity} %
          Pressure - ${data.main.pressure} Pa
          Weather - ${data.weather[0].main}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

