  import { useState, useEffect } from "react";
function Search() {
    
    const [movieData, setMovieData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchString, setSearchString] = useState(null);
  
    
    useEffect( () => {
      const fetchMovies = async () => {
        try {
        const response = await fetch("cinema.json");
  
        
        if (!response.ok) {
          throw new Error("could not fetch data ");
        }
        const data = await response.json();
  
  
        setMovieData(data);
        setIsLoading(false);
  
        } catch (error) {
          console.log(error);
        }
      }
    fetchMovies();
    }, [])
  
    if (isLoading) {
      return <div>Loading...</div>
    }
    // const filteredBooks = bookData.books.filter(book => book.title.toLocaleLowerCase().includes(searchString))  
    const filteredMovies = movieData.cinema.movies.filter(movie => movie.title.includes(searchString))
  console.log(filteredMovies);
    return (
      <>
        <h1>emils bioapp</h1>
        <div>
          <input placeholder="Search " type="text" name="search" onInput={ e => setSearchString(e.target.value)} value={searchString}/>
          <button type="submit">search</button>
        </div>
        <div>
          

          {filteredMovies.map(movie => (<div className='movie' key={movie.title}><b>title: {movie.title}</b><small>duration: {movie.duration}</small><i></i></div>))}
        <button onClick={() =>  movieData.cinema.movies}>show dates</button>
        {filteredMovies.map(movie => (<div className='movie' key={movie.shows}> shows: {movie.shows.map(show => <p>{show.time}</p>)}</div>))}        
        
        </div>
      </>
    )
  }
  
  export default Search;
  