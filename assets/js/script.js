// form error
const input = document.querySelector(".input");
const movie_wrapper = document.querySelector(".movie-wrapper");
<<<<<<< HEAD
document.querySelector(".btn").addEventListener("submit", function (e) {
  // console.log("hii");
=======
let movie_ul = document.createElement("ul");
movie_ul.className = "movie-list";
document.querySelector(".btn").addEventListener("click", function (e) {
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
  e.preventDefault();
  let x = document.getElementById("search-field").value;
  if (x == "" || x == null) {
    document.getElementById("error-para").innerHTML = "*Field are empty";
  }else{
    filterMovies();
  }
});
input.addEventListener("keyup", function () {
<<<<<<< HEAD
  // console.log("hih im key");
  movieFilter();
=======
  filterMovies();
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
});

// create movie object

<<<<<<< HEAD
const movie = {
 movie1 : {
=======
const movies = {
  movie1 : {
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
    movieName: "Zindagi Na Milegi Dobara",
    releaseDate: "20/12/2019",
    actorName: "Hrithik Roshan",
    producerName: "Ritesh Sidhwani",
  },
<<<<<<< HEAD
  movie2:{
=======
  movie2 :{
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
    movieName: "Judwaa 2",
    releaseDate: "20/12/2019",
    actorName: "Salman Khan",
    producerName: "Sajid Nadiadwala",
  },
<<<<<<< HEAD
  movie3:{
=======
  movie3 : {
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
    movieName: "zero",
    releaseDate: "12/08/2020",
    actorName: "Shahruk Khan",
    producerName: "Karan Johar",
  },
<<<<<<< HEAD
  movie4:{
=======
  movie4 :{
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
    movieName: "ready",
    releaseDate: "02/06/2017",
    actorName: "Salman Khan",
    producerName: "Sohel Khan",
  },
<<<<<<< HEAD
  movie5:{
=======
  movie5 :{
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
    movieName: "Don",
    releaseDate: "24/05/2015",
    actorName: "Shahruk Khan",
    producerName: "Karan Johar",
  },
<<<<<<< HEAD
  movie6:{
=======
  movie6 :{
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
    movieName: "Lagaan",
    releaseDate: "01/07/2010",
    actorName: "Amir Khan",
    producerName: "Amir Khan",
  },

<<<<<<< HEAD
  movie7:{
=======
  movie7 :{
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
    movieName: "Main Tera Hero",
    releaseDate: "17/02/2014",
    actorName: "Varun Dhawan",
    producerName: "Ekta Kapoor",
  },
<<<<<<< HEAD
  movie8:{
=======
  movie8 :{
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
    movieName: "Krrish",
    releaseDate: "02/06/2017",
    actorName: "Hrithik Roshan",
    producerName: "Rakesh Roshan",
  },
<<<<<<< HEAD
  movie9:{
=======
  movie9 :{
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
    movieName: "Don-2",
    releaseDate: "22/09/2013",
    actorName: "Shahruk Khan",
    producerName: "Karan Johar",
  },
<<<<<<< HEAD
  movie10:{
=======
  movie10 :{
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
    movieName: "Sultan",
    releaseDate: "09/11/2012",
    actorName: "Salman Khan",
    producerName: "Aditya Chopra",
  },
};
<<<<<<< HEAD
// console.log(movie.movie1.movieName);
// for ( items in movie){
//   console.log(movie[items].movieName);
// }

function showMovie(movie) {
  
  let movie_ul = document.createElement("ul");
  movie_ul.className = "movie-list";
  for ( items in movie){
    console.log(movie[items].movieName);
  let list = document.createElement("li");
  list.className = "list-item";
  list.innerHTML = `  <ul class="movie-detail">
  <li class="title">Movie  Name : ${movie[items].movieName}</li>
  <li class="title">Release Date : ${movie[items].releaseDate}</li>
  <li class="title">Actor Name : ${movie[items].actorName}</li>
  <li class="title">Producer Name : ${movie[items].producerName}</li>
</ul>`;
movie_wrapper.appendChild(movie_ul);
movie_ul.appendChild(list);
}
=======

function showMovie(movie) {
  let list = document.createElement("li");
  list.className = "list-item";
  list.innerHTML = `  <ul class="movie-detail">
  <li class="title">Movie  Name : ${movie.movieName}</li>
  <li class="title">Release Date : ${movie.releaseDate}</li>
  <li class="title">Actor Name : ${movie.actorName}</li>
  <li class="title">Producer Name : ${movie.producerName}</li>
</ul>`;
return list;
}

function showAllMovies() {
  for(let movie in movies) {
    const movieObject = movies[movie];
    movie_ul.appendChild(showMovie(movieObject));
  }
  movie_wrapper.appendChild(movie_ul);
>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
}
showAllMovies();


<<<<<<< HEAD

function movieFilter() {
  const movieArry = Object.entries(movie);
//  console.log(movieArry);
 const arrayFilter = movieArry.filter(function([key,value]){
  console.log(value.movieName);
  // for(let i = 0; i < value.length; i++) {
  //   console.log(value[i]);
    
  // };
  // console.log(value.releaseDate.toLowerCase() == (input.value.toLowerCase()));
  return (value.movieName.toLowerCase().includes(input.value.toLowerCase()) ||
    value.releaseDate.toLowerCase().includes(input.value.toLowerCase()) || 
    value.actorName.toLowerCase().includes(input.value.toLowerCase()) ||
    value.producerName.toLowerCase().includes(input.value.toLowerCase())
    )
 });
  movie_wrapper.innerHTML = "";
  if (arrayFilter != "") {
    showMovie(arrayFilter);
=======
function filterMovies() {
  let filterMovieList = [];
  movie_wrapper.innerHTML = "";
  movie_ul.innerHTML = "";

  for(let movie in movies) {
    const movieObject = movies[movie];
    if( movieObject.movieName.toLowerCase().includes(input.value.toLowerCase()) ||
    movieObject.releaseDate.toLowerCase().includes(input.value.toLowerCase()) || 
    movieObject.actorName.toLowerCase().includes(input.value.toLowerCase()) ||
    movieObject.producerName.toLowerCase().includes(input.value.toLowerCase())) {
      filterMovieList.push(movieObject);
    }   
  }

  if(filterMovieList.length != 0) {
    filterMovieList.forEach(item => {
      movie_ul.appendChild(showMovie(item));
    });
    movie_wrapper.appendChild(movie_ul);

>>>>>>> 5b9c5423072bdc911e21e21b410a5d7bda3578c9
  } else {
    movieNotFound();
  }

}


function movieNotFound() {
  const notFound = document.createElement("span");
  notFound.className = "not-found";
  notFound.innerText = "Movies Not Found...!";
  movie_wrapper.appendChild(notFound)
};
