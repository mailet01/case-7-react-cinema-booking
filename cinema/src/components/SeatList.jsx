export function SeatList({ filtredMovies }) {
  return (
    <>
      <ul>
        {filtredMovies?.map((movie) =>
          movie.shows.seats?.map((seat) => (
            <li key={seat.seatNumber}>{seat.seatNumber}</li>
          ))
        )}
      </ul>
    </>
  );
}
