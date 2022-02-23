const countrySection = document.getElementById('country');
const title = document.getElementById('staticBackdropLabel');
const population = document.getElementById('population');
const cImg = document.getElementById('country-img');

const getCountry = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json()).then(data => showData(data));
}
getCountry();
const showData = data => {
    data.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country-item');
        
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="loadCountryDetails('${country.name}')">
            Details
            </button>
            `
        countrySection.appendChild(div);
    });
}

const loadCountryDetails=name=>{
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
        .then(res => res.json()).then(data => displayCountryDetails(data[0]));
}
const displayCountryDetails = country => {
    console.log(country);
    title.innerText = country.name;
    cImg.setAttribute('src', `${country.flags.svg}`);
    population.innerText = `Population: ${country.population}`;
}