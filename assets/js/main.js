function Movie(name, genre, IMDB, image, about){
  this.name = name;
  this.genre = genre;
  this.IMDB = IMDB;
  this.image = image;
  this.about=about
}
// Movie.prototype.toString = function(){
//   return this.name + " " +this.genre
// }


let movies = [];
let box = document.getElementById("box");
getMovies();
function getMovies(){
  box.innerHTML = "";
  for (const movie of movies) {
      box.innerHTML +=
      `<div class="col-md-4 py-4">
          <div class="card w-100">
          <div class=" position-relative">
          <div class="position-absolute w-100 bg-in h-100 info text-center">
          <h5 class="text-black p-5">${movie.about}</h5>
          </div>
            <img src="${movie.image}" class="card-img-top h" alt="">
          </div>
          <div class="card-body">
            <p class="card-text">
              <h1>${movie.name}</h1>
              <h3>${movie.genre}</h3>
              <h4>${movie.IMDB}</h4>
            </p>
          </div>
        </div>
      </div>`
  }
}

function CreateMovie(){
  movies.push(new Movie(inputName.value,inputGenre.value,inputImdb.value,ImageUrl.value,inputAbout.value))
  getMovies()
}