'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
        console.log(response);
       return response.json();
    }).then(function(data){
        console.log(data);

    });
}