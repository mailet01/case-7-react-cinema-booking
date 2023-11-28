import { useState } from "react";

function Booking({cinemaData}) {
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
<button onClick={handleClick}>book now</button>



</form>



</>
)
}
export default Booking;