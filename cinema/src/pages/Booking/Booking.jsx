import { useState } from "react";

function Booking({cinemaData}) {
    const [selectedMovie, setSelectedMovie] = useState("");
    const [nameInput, setNameInput] = useState("");
const handleBookTicket = evt => {
setNameInput(evt.target.innerText);
}
const handleClick = (evt) => {
alert(`thank you for your booking. you are going to watch ${selectedMovie.title}`)
}
const handleMovieChange = (evt) => {
console.log("movie changed")
console.log("evt", evt.target.value)
 const movie = cinemaData.cinema.movies.find(movie => movie.title === evt.target.value)
console.log("någon klickade på en film");
 setSelectedMovie(movie)
}
const handleShowChange = (evt) => {
console.log("show changed");
console.log("evt", evt.target.value);
}

return (
<>
<h1>bokningssida</h1>

<form>
<input type="text" placeholder="your name" />
<label htmlFor="movietitles" >chose movie</label>
<select name="movietitles" id="movietitles" onChange={handleMovieChange}>
    {cinemaData.cinema.movies.map(movie => <option key={movie.title} value={movie.title}>{movie.title}</option> )}





</select>
<label htmlFor="moviedate">chose date </label>

<select name="movideate" id="moviedate" onChange={handleShowChange}>

{selectedMovie.shows?.map(show => <option value={show.time}>{show.time}</option> )}
</select>

<button onClick={handleClick}>book now</button>



</form>






</>
)
}
export default Booking;