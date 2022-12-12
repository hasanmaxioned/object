// form error
const input = document.querySelector(".input");
const movie_wrapper = document.querySelector(".movie-wrapper");
document.querySelector(".btn").addEventListener("submit", function (e) {
  // console.log("hii");
  e.preventDefault();
  let x = document.getElementById("search-field").value;
  if (x == "" || x == null) {
    document.getElementById("error-para").innerHTML = "*Field are empty";
  }else{
    movieFilter();
  }
});
input.addEventListener("keyup", function () {
  // console.log("hih im key");
  movieFilter();
});

// create movie object

const movie = {
 movie1 : {
    movieName: "Zindagi Na Milegi Dobara",
    releaseDate: "20/12/2019",
    actorName: "Hrithik Roshan",
    producerName: "Ritesh Sidhwani",
  },
  movie2:{
    movieName: "Judwaa 2",
    releaseDate: "20/12/2019",
    actorName: "Salman Khan",
    producerName: "Sajid Nadiadwala",
  },
  movie3:{
    movieName: "zero",
    releaseDate: "12/08/2020",
    actorName: "Shahruk Khan",
    producerName: "Karan Johar",
  },
  movie4:{
    movieName: "ready",
    releaseDate: "02/06/2017",
    actorName: "Salman Khan",
    producerName: "Sohel Khan",
  },
  movie5:{
    movieName: "Don",
    releaseDate: "24/05/2015",
    actorName: "Shahruk Khan",
    producerName: "Karan Johar",
  },
  movie6:{
    movieName: "Lagaan",
    releaseDate: "01/07/2010",
    actorName: "Amir Khan",
    producerName: "Amir Khan",
  },

  movie7:{
    movieName: "Main Tera Hero",
    releaseDate: "17/02/2014",
    actorName: "Varun Dhawan",
    producerName: "Ekta Kapoor",
  },
  movie8:{
    movieName: "Krrish",
    releaseDate: "02/06/2017",
    actorName: "Hrithik Roshan",
    producerName: "Rakesh Roshan",
  },
  movie9:{
    movieName: "Don-2",
    releaseDate: "22/09/2013",
    actorName: "Shahruk Khan",
    producerName: "Karan Johar",
  },
  movie10:{
    movieName: "Sultan",
    releaseDate: "09/11/2012",
    actorName: "Salman Khan",
    producerName: "Aditya Chopra",
  },
};
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
}
showMovie(movie);



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
