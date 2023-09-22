export function SeatList({ filtredSeats }) {
return (
<>
<ul>
{filtredSeats.seats.map((seat) => (
<li>{seat.seatNumber}</li>
))}


</ul>
</>
)
}