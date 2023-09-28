import { useState } from "react";

function Booking({cinemaData}) {
const [nameInput, setNameInput] = useState("");
const handleBookTicket = evt => {
setNameInput(evt.target.innerText);
}
return (
<>
<h1>bokningssida</h1>
<form onSubmit={cinemaData.onSubmit}>
<input type="text" placeholder="your name" />
<button>book now</button>



</form>



</>
)
}
export default Booking;