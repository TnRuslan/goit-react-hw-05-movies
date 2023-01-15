export const API = {
  baseUrl: 'https://api.themoviedb.org/3',
  API_KEY: '3ff904f01b180e8aa08fc9b52d5b2a33',

  fetchByMovieId(id) {
    return fetch(
      `${this.baseUrl}/movie/${id}?api_key=${this.API_KEY}&language=en-US`
    ).then(res => res.json());
  },

  fetchTrendingMovies() {
    return fetch(
      `${this.baseUrl}/trending/movie/day?api_key=${this.API_KEY}`
    ).then(res => res.json());
  },

  fetchByMovieName(name) {
    return fetch(
      `${this.baseUrl}/search/movie?api_key=${this.API_KEY}&language=en-US&query=${name}`
    ).then(res => res.json());
  },

  fetchMovieReviews(movieId) {
    return fetch(
      `${this.baseUrl}/movie/${movieId}/reviews?api_key=${this.API_KEY}&language=en-US&page=1`
    ).then(res => res.json());
  },

  fetchMovieCast(movieId) {
    return fetch(
      `${this.baseUrl}/movie/${movieId}/credits?api_key=${this.API_KEY}&language=en-US`
    ).then(res => res.json());
  },
};
