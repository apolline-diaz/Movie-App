import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MoviePage = () => {
  const getReleaseYear = (release_date) => {
    if (!release_date) return null;
    return release_date.split("-")[0];
  };

  function formatToOneDecimal(number) {
    return Math.floor(number * 10) / 10;
  }

  const { id } = useParams();
  const [movie, setMovie] = useState({
    id: "",
    name: "",
    release_date: "",
    synopsis: "",
    poster: "",
    img: "",
    vote: "",
  });

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4167b87055ac256fb149485d86ca5b86&language=en-US`
        );
        const data = await response.json();
        const genres = data.genres.map((genre) => genre.name).join(", ");

        setMovie({
          id: data.id,
          name: data.title,
          release_date: data.release_date,
          synopsis: data.overview,
          poster: data.poster_path,
          img: data.backdrop_path,
          vote: data.vote_average,
          runtime: data.runtime,
          country: data.origin_country,
          genre: genres,
        });
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    getDetails();
  }, [id]);

  return (
    <>
      <div className='text-black relative w-full h-full'>
        <div className='relative w-full max-h-1/2-screenoverflow-hidden'>
          <img
            className='opacity-130 w-full h-full object-cover'
            src={`https://image.tmdb.org/t/p/original/${movie.img}`}
            alt={movie.name}
          />
          <div className='absolute top-20 right-5 text-white text-3xl font-light px-2 py-1 rounded'>
            <p className='flex flex-row items-center text-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                />
              </svg>
              <strong> {formatToOneDecimal(movie.vote)}</strong>
            </p>
          </div>
          <div className='absolute bottom-0 text-white left-0 p-4 flex flex-col gap-2'>
            <h1 className='text-3xl md:text-5xl font-bold uppercase'>
              {movie.name}
            </h1>
            <p className='font-light'>
              <strong> {getReleaseYear(movie.release_date)}</strong>
            </p>
            <p className='text-xs'>{movie.genre}</p>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='p-5 gap-2'>
          <h3 className='font-bold'>SYNOPSIS</h3>
          <p className='text-base'>{movie.synopsis}</p>
        </div>
        {/* <div className='p-5 space-x-2 gap-2'>
          <span className='p-2 text-xs rounded-full border border-black'>
            Key-word
          </span>
        </div> */}
      </div>
    </>
  );
};

export default MoviePage;
