
export function DateList({ filteredMovies }) {
  return (
    <>
      <ul>
        {filteredMovies.map((movie) =>
          movie.shows?.map((show) => <li key={show.time}>{show.time}</li>)
        
        )}
      </ul>

    </>
  );
}
