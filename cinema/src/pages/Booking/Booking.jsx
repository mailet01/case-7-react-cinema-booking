import { useState } from "react";

function Booking({cinemaData}) {
    const [selectedMovie, setSelectedMovie] = useState("");
    const [nameInput, setNameInput] = useState("");
const handleBookTicket = evt => {
setNameInput(evt.target.innerText);
}
const handleClick = (evt) => {
alert("thank you for your booking")
}

return (
<>
<h1>bokningssida</h1>

<form>
<input type="text" placeholder="your name" />
<label htmlFor="movietitles" >chose movie</label>
<select name="movietitles" id="movietitles">
    {cinemaData.cinema.movies.map(movie => <option value={movie.title}>{movie.title}</option> )}





</select>
<label htmlFor="moviedate">chose date </label>

<select name="movideate" id="moviedate">
{cinemaData.cinema.movies.map(movie => 
movie.shows.map(show => <option value={show.time}>{show.time}</option>
    )
    )}    
</select>
<label htmlFor="movieseats">chose seat</label>
<select name="movieseats" id="movieseats">
{cinemaData.cinema.movies.map(movie => 
movie.shows.map(show => 
show.seats.map(seat => <option value={seat.seatNumber}>{seat.seatNumber}{""} {seat.booked ? ("is booked") : ("available")} </option> 
    )
    )
    )}
</select>
<button onClick={handleClick}>book now</button>



</form>






</>
)
}
export default Booking;