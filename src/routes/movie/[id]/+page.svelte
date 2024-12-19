<!-- src/routes/movie/[id]/+page.svelte -->
<script context="module">
  import { getMovieDetails } from '$lib/tmdb.js';

  export async function load({ params }) {
    const movie = await getMovieDetails(params.id);
    return { props: { movie } };
  }
</script>

<script>
  export let movie;
</script>

<div class="relative h-screen bg-cover bg-center" style="background-image: url('https://image.tmdb.org/t/p/w500{movie.poster_path}')">
  <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="text-center text-white">
      <h1 class="text-4xl font-bold mb-4">{movie.title}</h1>
      <p class="text-lg">{movie.overview}</p>
      <p class="mt-4">Release Date: {movie.release_date}</p>
    </div>
  </div>
</div>