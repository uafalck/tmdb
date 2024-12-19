// src/lib/tmdb.js
const API_KEY = '3527e146e63a9b9b9b6a335d20af8f54';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await response.json();
  return data.results;
}

export async function getMovieDetails(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  console.log(data)
  return data.results;

}