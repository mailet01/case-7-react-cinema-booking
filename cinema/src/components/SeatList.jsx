export function SeatList ({filteredMovies }) {
return (
<>
<ul>
{filteredMovies?.map((movie) =>
movie.shows.map((show) => 
show.seats?.map((seat) => <li key={seat.seatNumber}>{seat.seatNumber} {seat.booked ? "is booked" : "is avaible"}</li>))
)}

</ul>
</>
);
}