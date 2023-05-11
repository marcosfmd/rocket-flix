// const apiUrl = "https://api.themoviedb.org/3/movie/550?api_key=bae3f6d4f76995e09a13d02f3db3e9e3"

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = 'api_key=bae3f6d4f76995e09a13d02f3db3e9e3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'pt-BR';


const button = document.querySelector(".button")
const movieWrapper = document.querySelector(".wrapper-film")
const movieImg = document.querySelector(".movieImg")
const movieTitle = document.querySelector(".movieTitle")
const movieDescription = document.querySelector(".movieDescription")

function getMovies () {
  const id = Math.floor(Math.random() *1000) + 1
  const apiUrl = `${BASE_URL}/${id}?${API_KEY}&${language}`
  
  fetch(apiUrl)
    .then(response =>  response.json())
    .then(data => {
      movieImg.src = `${IMG_URL}${data.poster_path}`
      movieTitle.innerText =  data.original_title
      movieDescription.innerText = data.overview

      if(data.status_code == 34) {
        movieTitle.innerText =  '',
        movieImg.src = '../assets/images/poster.png',
        movieDescription.innerText = 'Ops, hoje não é dia de assistir filme. Bora codar! 🚀'
      }
    })
    .catch(error => { console.log(error)})
    movieWrapper.style.display = 'flex'
}

button.addEventListener("click", () => {
  getMovies()
})
