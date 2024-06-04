import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MoviePage = () => {
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
        setMovie({
          id: data.id,
          name: data.title,
          release_date: data.release_date,
          synopsis: data.overview,
          poster: data.poster_path,
          img: data.backdrop_path,
          vote: data.vote_average,
        });
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    getDetails();
  }, [id]);

  return (
    <>
      <div className='text-black'>
        <div className=''>
          <img
            className='w-full h-full object-cover '
            src={`https://image.tmdb.org/t/p/original/${movie.img}`}
            alt={movie.name}
          />
          {/* <p>
            {like ? (
              <FaHeart className='absolute top-4 left-4 text-gray-300' />
            ) : (
              <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
            )}
          </p> */}
          <h1 className='relative bottom-0 left-0 w-full h-full text-3xl md:text-5xl font-bold p-4'>
            {movie.name}
          </h1>
        </div>
        <div className='p-5 gap-2'>
          <p className='text-base'>{movie.synopsis}</p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong> {movie.vote}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
