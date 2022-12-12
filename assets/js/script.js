// form error
const input = document.querySelector(".input");
const movie_wrapper = document.querySelector(".movie-wrapper");
let movie_ul = document.createElement("ul");
movie_ul.className = "movie-list";
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  let x = document.getElementById("search-field").value;
  if (x == "" || x == null) {
    document.getElementById("error-para").innerHTML = "*Field are empty";
  }else{
    filterMovies();
  }
});
input.addEventListener("keyup", function () {
  filterMovies();
});

// create movie object

const movies = {
  movie1 : {
    movieName: "Zindagi Na Milegi Dobara",
    releaseDate: "20/12/2019",
    actorName: "Hrithik Roshan",
    producerName: "Ritesh Sidhwani",
  },
  movie2 :{
    movieName: "Judwaa 2",
    releaseDate: "20/12/2019",
    actorName: "Salman Khan",
    producerName: "Sajid Nadiadwala",
  },
  movie3 : {
    movieName: "zero",
    releaseDate: "12/08/2020",
    actorName: "Shahruk Khan",
    producerName: "Karan Johar",
  },
  movie4 :{
    movieName: "ready",
    releaseDate: "02/06/2017",
    actorName: "Salman Khan",
    producerName: "Sohel Khan",
  },
  movie5 :{
    movieName: "Don",
    releaseDate: "24/05/2015",
    actorName: "Shahruk Khan",
    producerName: "Karan Johar",
  },
  movie6 :{
    movieName: "Lagaan",
    releaseDate: "01/07/2010",
    actorName: "Amir Khan",
    producerName: "Amir Khan",
  },

  movie7 :{
    movieName: "Main Tera Hero",
    releaseDate: "17/02/2014",
    actorName: "Varun Dhawan",
    producerName: "Ekta Kapoor",
  },
  movie8 :{
    movieName: "Krrish",
    releaseDate: "02/06/2017",
    actorName: "Hrithik Roshan",
    producerName: "Rakesh Roshan",
  },
  movie9 :{
    movieName: "Don-2",
    releaseDate: "22/09/2013",
    actorName: "Shahruk Khan",
    producerName: "Karan Johar",
  },
  movie10 :{
    movieName: "Sultan",
    releaseDate: "09/11/2012",
    actorName: "Salman Khan",
    producerName: "Aditya Chopra",
  },
};

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
}
showAllMovies();


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
