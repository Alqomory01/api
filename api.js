'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
        console.log(response);
       return response.json();
    }).then(function(data){
        console.log(data);

        const countryData = data[0]
        const apiRequest = `
        <article class="country">
        <img class="country__img" src="${countryData.flags.png}">
        <div class="country__data">
        <h3 class="country__name">${countryData.name.common}</h3>
        <h4 class="country__region">${countryData.region}</h4>
        <p class="country__row"><span>👫</span>${countryData.population}</p>

        </div>
        </article>`
        countriesContainer.insertAdjacentHTML("beforeend", apiRequest)
        countriesContainer.style.opacity= 1;


    });
}
getCountryData("spain")
getCountryData("nigeria")
// getCountryData("usa")

//  function countryData(data){
//     return data *2
//  }
// console.log(countryData(5));