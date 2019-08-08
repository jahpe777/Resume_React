/*'use strict';

function getLyrics(artist, title) {
   fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(responseJson) {
            displayResults(responseJson);
        })
        .catch(function(error) {
            alert('error fetching results');
        });
};

function displayResults(responseJson) {
    $('#results').empty();
    $('#results').append(`${responseJson.lyrics}`);
    $('#results').removeClass('hidden');
};

function watchForm() {
    $('form').submit(function(event) {
        event.preventDefault();
        const artist = $('.js-query-artist').val();
        const title = $('.js-query-title').val();
        getLyrics(artist, title); 
    });
};  

$(watchForm);*/


/*
function getLyrics(artist, title) {
    console.log('k');
        fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (responseJson) {
                displayResults(responseJson)
            })
            .catch(error => {
                alert("error fetching results")
            })
    }

function displayResults(responseJson) {
    console.log(responseJson);
    $('#results').empty();
      $('#results').append(
        `<li><h3>${responseJson.lyrics}</h3></li>`
      )};  
    $('.results').removeClass('hidden');
  ;

function watchForm() {
    $('form').submit(event => {
        console.log('yep');
        event.preventDefault();
        console.log($('.js-query-artist'))
        const artist = $('.js-query-artist').val();
        const title = $('.js-query-title').val();
        getLyrics(artist, title);
      });
    }

$(watchForm);*/

'use strict';

function getBreweries(state) {
  fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
  .then(function(response){
    return response.json();
  })
  .then(function(responseJson){
    displayResults(responseJson)
  })
  .catch(error =>{
    alert("state cannot be found")
  });
}

function displayResults(responseJson) {
  $('.js-search-results').empty();
  if (responseJson.length > 0){
    for (let i = 0; i < responseJson.length; i++){
      $('.js-search-results').append(`<li><a href='${responseJson[i].website_url}'>${responseJson[i].name},</a></li>`)
    };
  };
}

function watchForm() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let state = $('.js-query').val();
    getBreweries(state);
  });
}

$(watchForm);