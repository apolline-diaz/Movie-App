const key = "4167b87055ac256fb149485d86ca5b86";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US&page=1`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=315058`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestLGBT: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=158718`,
};

export default requests;

// Source : https://www.themoviedb.org/talk/606bd7cf0c3ec800409d2aa0
// NB : pour trouver l'id d'un mot-clé (ex: "horror") : https://api.themoviedb.org/3/search/keyword?api_key=4167b87055ac256fb149485d86ca5b86&query=horror
