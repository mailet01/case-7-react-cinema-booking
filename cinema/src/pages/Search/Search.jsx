import { MovieList } from "../../components/MovieList";
import { DateList } from "../../components/DateList";
import { SeatList } from "../../components/SeatList";
import { useState, useEffect } from "react";
function Search({ cinemaData }) {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchString, setSearchString] = useState("");
  console.log("från app.js cinemadata", cinemaData);
  const filteredMovies = cinemaData.cinema.movies.filter((movie) =>
    movie.title.includes(searchString)
  );
  console.log(filteredMovies);

  return (
    <>
      <h1>emils bioapp</h1>
      <div>
        <input
          placeholder="Search "
          type="text"
          name="search"
          onInput={(e) => setSearchString(e.target.value)}
          value={searchString}
        />
        <button type="submit">search</button>
      </div>

      {/* komponent */}
      <MovieList filteredMovies={filteredMovies} />
       <DateList filteredMovies={filteredMovies} />
<SeatList filteredMovies={filteredMovies} />
    </>
  );
}

export default Search;
