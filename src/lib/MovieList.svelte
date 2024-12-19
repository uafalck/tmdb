<!-- src/lib/MovieList.svelte -->
<script>
  import { onMount } from 'svelte';
  import { getMovieDetails, getPopularMovies } from './tmdb.js';

  let movies = [];

  onMount(async () => {
    movies = await getPopularMovies();
  });

  
</script>

<div class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-4">Popular Movies</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {#each movies as movie}
      <a href={`/movie/${movie.id}`} class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={`https://image.tmdb.org/t/p/w500/${(movie.poster_path)}`} alt={movie.title} class="w-full h-64 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-bold">{movie.title}</h2>
          <p class="text-gray-600">{movie.release_date}</p>
        </div>
      </a>
    {/each}
  </div>
</div>