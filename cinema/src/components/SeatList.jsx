
export function SeatList({ filteredMovies }) {
  const handleClick = (evt) => {
    alert("thank you for your booking");
  };
  return (
    <>
      <ul>
        {filteredMovies?.map((movie) =>
          movie.shows.map((show) =>
            show.seats?.map((seat) => (
              <li key={seat.seatNumber}>
                {seat.seatNumber}{" "}
                {seat.booked ? (
                  "is booked"
                ) : (
                  <button onClick={handleClick}>boka {seat.seatNumber}</button>
                )}
              </li>
            ))
          )
        )}
      </ul>
    </>
  );
}