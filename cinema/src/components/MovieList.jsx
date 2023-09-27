import { DateList } from "./DateList";
import { SeatList } from "./SeatList";
export function MovieList({ filteredMovies }) {
  console.log("A", filteredMovies);

  return (
    <ul>
      
      {filteredMovies.map((movie) => (
        <li key={movie.title}>
          <h3>{movie.title}</h3>

          <small>duration: {movie.duration}</small>
          {/* använd komponenten datelist */}
      <DateList filteredMovies={movie.shows} />
      {/* använd komponenten SeatList */}
<SeatList filtredMovies={movie.shows.seats} />
        </li>
      ))}
    </ul>
  );
}
