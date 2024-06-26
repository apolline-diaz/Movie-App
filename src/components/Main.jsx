import React, { useEffect, useState } from "react";
import requests from "../Requests";
import { Link } from "react-router-dom";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    fetch(requests.requestPopular)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Tronquer le synopsis s'il est trop long
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='relative w-full h-full'>
        {movie && (
          <Link to={`/movie/${movie.id}`}>
            <div className='absolute w-full max-h-1/2-screen bg-gradient-to-r from-black'></div>
            <>
              <img
                className='w-full h-full object-cover'
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className='absolute w-full bottom-[10%] flex flex-col gap-3 justify-start p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>
                  {movie.title}
                </h1>
                {/* <div className='my-4'>
                  <button className='border rounded-full bg-gray-300 hover:bg-white text-black border-gray-300 py-2 px-5'>
                    Watch Trailer
                  </button>
                </div> */}
                <p className='text-white text-medium'>
                  {formatDate(movie.release_date)}
                </p>
                <p className='text-sm w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
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
