const movieDetails = document.querySelector('.movie-details');
const image = document.querySelector('.image');

let input = document.querySelector('input');

let Title = document.querySelector('.title');
let Year = document.querySelector('.year');
let Released = document.querySelector('.released');
let Genre = document.querySelector('.genre');
let Director = document.querySelector('.director');
let Writer = document.querySelector('.writer');
let Actors = document.querySelector('.actors');
let Plot = document.querySelector('.plot');
let Language = document.querySelector('.language');
let Ratings = document.querySelector('.rating');
let Poster = document.querySelector('.poster');
const api = 'https://www.omdbapi.com/?apikey=a7fb5e62&t=';

function search() {
  let query = api + input.value;
  movieDetails.style.visibility = 'visible';
  image.style.visibility = 'visible';

  try {
    fetch(query)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        Title.innerText = data.Title;
        Year.innerText = data.Year;
        Released.innerText = data.Released;
        Genre.innerText = data.Genre;
        Director.innerText = data.Director;
        Writer.innerText = data.Writer;
        Actors.innerText = data.Actors;
        Plot.innerText = data.Plot;
        Language.innerText = data.Language;
        Ratings.innerText = data.Ratings[0].Value;
        Poster.src = data.Poster;
      });
  } catch (error) {}
}
