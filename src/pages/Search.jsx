import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  //   const [searchValue, setSearchValue] = useState("");
  //   const [tempSearchValue, setTempSearchValue] = useState("");
  //   const [activePage, setActivePage] = useState(1);
  //   const [totalPages, setTotalPages] = useState(1);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     searchData(searchValue, activePage)
  //       .then((res) => {
  //         console.log(res, "res");
  //         setData(res?.results);
  //         setActivePage(res?.page);
  //         setTotalPages(res?.total_pages);
  //       })
  //       .catch((err) => console.log(err, "err"))
  //       .finally(() => setIsLoading(false));
  //   }, [searchValue, activePage]);

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     setSearchValue(tempSearchValue);
  //   };

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[280px] inline-block cursor-pointer relative m-1'>
      {item && (
        <Link to={`/movie/${item.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            alt={item.title}
          />
          <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <div className='white-space-normal text-xs md:text-sm flex flex-col justify-left items-end h-full text-left p-4'>
              <p className='font-bold flex flex-raw max-w-full break-words'>
                {truncateString(item.title, 20)}
              </p>
              <p className='font-light'>{getReleaseYear(item.release_date)}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Search;
