require("dotenv").config();
const axios = require("axios");
const { get } = require("./routes");

const baseUrl = "https://api.themoviedb.org/3/movie/";
const imageUrl = "http://image.tmdb.org/t/p/w94";
const apiKey = process.env.API;

// const movies = baseUrl + `/popular?api_key=${apiKey}&language=ko-KR&page=1`;

const url1 = "https://api.themoviedb.org/3/movie/popular?api_key=656e4baf4a63913cd93198a95419a5e6&language=ko-KR&page=1";
const url2 = "?api_key=656e4baf4a63913cd93198a95419a5e6&language=ko-KR";
const url3 = "/credits?api_key=656e4baf4a63913cd93198a95419a5e6&language=ko-KR";

function popularMovies() {
  axios
    .get(url1)
    .then((data) => data.data.results)
    .then((data) =>
      data.map((el) => {
        return { id: el.id, title: el.title, photo: el.poster_path, releasedAt: el.release_date, description: el.overview };
      })
    )
    .then((data) => console.log(data));
}

popularMovies();
