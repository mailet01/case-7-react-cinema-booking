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
      <DateList filtredDates={movie.shows} />
      {/* använd komponenten SeatList */}
<SeatList filtredSeats={movie.seats} />
        </li>
      ))}
    </ul>
  );
}
