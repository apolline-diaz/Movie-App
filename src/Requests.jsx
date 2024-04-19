const key = "4167b87055ac256fb149485d86ca5b86";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=315058`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTeen: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=329128`,
  requestTeenage: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=286189`,
  requestTeenDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=193400`,
  requestTeenageRomanceAndLove: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=18823718425`,
  requestTeenageLove: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=18425`,
  requestDisturbedTeenager: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=192241`,
  requestTeenSocialIssues: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=213120`,
  requestHorseAndTeenager: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=274113`,
  requestVideoGameHighSchool: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=250751`,
  requestLGBTTeen: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=163037`,
  requestLGBT: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=158718`,
  request1990: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&primary_release_year=1990`,
  request2000: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&primary_release_year=2000`,
  requestFeministActivism: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=233514`,
  requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=9840`,
  requestLove: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&with_keywords=9673`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_keywords=322268`,
  requestPolitical: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_keywords=264792`,
};

export default requests;

// Source : https://www.themoviedb.org/talk/606bd7cf0c3ec800409d2aa0
// NB : pour trouver l'id d'un mot-clé (ex: "horror") : https://api.themoviedb.org/3/search/keyword?api_key=4167b87055ac256fb149485d86ca5b86&query=horror
