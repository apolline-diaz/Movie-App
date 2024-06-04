import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../Requests";
import { Link } from "react-router-dom";

const Main = () => {
  const [movies, setMovies] = useState([]);

  // Récupère un film de façon aléatoire à chaque requête
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);

  // Tronquer le synopsis s'il est trop long
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        {movie && (
          <Link to={`/movie/${movie.id}`}>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <>
              <img
                className='w-full h-full object-cover'
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className='absolute w-full bottom-[10%] justify-start p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>
                  {movie.title}
                </h1>

                <div className='my-4'>
                  <button className='border rounded-full bg-gray-300 hover:bg-white text-black border-gray-300 py-2 px-5'>
                    Watch Trailer
                  </button>
                </div>
                <p className='text-gray-400 text-sm'>
                  Released: {movie.release_date}
                </p>
                <p className='text-xs w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                  {truncateString(movie.overview, 150)}
                </p>
              </div>
            </>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Main;
