import { Link } from "react-router-dom";
function Welcome() {
  return (
    <>
      <p>
        Välkommen till biografen Cinema World. De filmer som vi har är
        Heffarklumpen, Game of throwns, Dunderklumpen, Karlsson på taket och The
        boy in striped pyiamas. För att boka föreställning
        <button><Link to={"/Booking"} /></button>
        
      </p>
      
      <p>
    
        Du kan även söka bland våra filmer på länken nedan:
        <button><Link to={"/Search"}/> </button>
      </p>
    </>
  );
}
export default Welcome;
