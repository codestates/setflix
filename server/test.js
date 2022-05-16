require("dotenv").config();
const { fetch } = require("node-fecth");

const baseUrl = "https://api.themoviedb.org/3/movie";
const imageUrl = "hppt://image.tmdb.org/t/p/사이즈";
const apiKey = process.env.API;

const movies = baseUrl + `/popular?api_key=${apiKey}&language=ko-KR&page=1`;
const url = "https://api.themoviedb.org/3/movie/popular?api_key=656e4baf4a63913cd93198a95419a5e6&language=ko-KR&page=1";

const response = await fetch(url);
const data = await response.json();

console.log(data);
