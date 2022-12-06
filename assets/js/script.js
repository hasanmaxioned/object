// form error
const input = document.querySelector(".input");
const movie_wrapper = document.querySelector(".movie-wrapper");
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  let x = document.getElementById("search-field").value;
  if (x == "" || x == null) {
    document.getElementById("error-para").innerHTML = "*Field are empty";
  }else{
    movieFilter();
  }
});
input.addEventListener("keyup", function () {
  movieFilter();
});

// create movie object

const movie = [
  {
    movieName: "Zindagi Na Milegi Dobara",
    releaseDate: "20/12/2019",
    actorName: "Hrithik Roshan",
    producerName: "Ritesh Sidhwani",
  },
  {
    movieName: "Judwaa 2",
    releaseDate: "20/12/2019",
    actorName: "Salman Khan",
    producerName: "Sajid Nadiadwala",
  },
  {
    movieName: "zero",
    releaseDate: "12/08/2020",
    actorName: "Shahruk Khan",
    producerName: "Karan Johar",
  },
  {
    movieName: "ready",
    releaseDate: "02/06/2017",
    actorName: "Salman Khan",
    producerName: "Sohel Khan",
  },
  {
    movieName: "Don",
    releaseDate: "24/05/2015",
    actorName: "Shahruk Khan",
    producerName: "Karan Johar",
  },
  {
    movieName: "Lagaan",
    releaseDate: "01/07/2010",
    actorName: "Amir Khan",
    producerName: "Amir Khan",
  },

  {
    movieName: "Main Tera Hero",
    releaseDate: "17/02/2014",
    actorName: "Varun Dhawan",
    producerName: "Ekta Kapoor",
  },
  {
    movieName: "Krrish",
    releaseDate: "02/06/2017",
    actorName: "Hrithik Roshan",
    producerName: "Rakesh Roshan",
  },
  {
    movieName: "Don-2",
    releaseDate: "22/09/2013",
    actorName: "Shahruk Khan",
    producerName: "Karan Johar",
  },
  {
    movieName: "Sultan",
    releaseDate: "09/11/2012",
    actorName: "Salman Khan",
    producerName: "Aditya Chopra",
  },
];

function showMovie(movie) {
  
  let movie_ul = document.createElement("ul");
  movie_ul.className = "movie-list";
  movie.forEach(function (element) {
  let list = document.createElement("li");
  list.className = "list-item";
  list.innerHTML = `  <ul class="movie-detail">
  <li class="title">Movie  Name : ${element.movieName}</li>
  <li class="title">Release Date : ${element.releaseDate}</li>
  <li class="title">Actor Name : ${element.actorName}</li>
  <li class="title">Producer Name : ${element.producerName}</li>
</ul>`;
movie_wrapper.appendChild(movie_ul);
movie_ul.appendChild(list);
});
}
showMovie(movie);


function movieFilter() {
  const result = movie.filter(function (movie){
    return (movie.movieName.toLowerCase().includes(input.value.toLowerCase()) ||
    movie.releaseDate.toLowerCase().includes(input.value.toLowerCase()) || 
    movie.actorName.toLowerCase().includes(input.value.toLowerCase()) ||
    movie.producerName.toLowerCase().includes(input.value.toLowerCase())
    )
  });
  movie_wrapper.innerHTML = "";
  if (result != "") {
    showMovie(result);
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
