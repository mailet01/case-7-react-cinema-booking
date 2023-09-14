function Booking(props) {
return (
<form onSubmit={props.onSubmit}>
<p>
Vilka filmr vill du se?
<input type="checkbox" name="Heffarklumpen" id="Heffarklumpen" />
<input type="checkbox" name="Game of throwns" id="Game of throwns" />
<input type="checkbox" name="Dunderklumpen" id="Dunderklumpen" />
<input type="checkbox" name="Karlsson på taket" id="Karlsson på taket" />
<input type="checkbox" name="The boy in striped pyiamas" id="The boy in striped pyiamas" />
<input type="text" name="name" id="name" placeholder="ditt namn"/>
</p>
</form>
)
}
export default Booking;