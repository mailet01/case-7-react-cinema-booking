export function DateList({ filtredDates }) {
  console.log("filtredDates", filtredDates);
  return (
    <>
      <ul>
        {filtredDates ? filtredDates.shows.map((show) => (
          <li>{show.time}</li>
        )) : null}
      </ul>
    </>
  );

  // return (
  //   <ul>
  //     {filtredDates.map((movie) => (
  //       <li key={movie.shows}>
  //         {" "}
  //         shows:{" "}
  //         {movie.shows.map((show) => (
  //           <h1>{show.time}</h1>
  //         ))}
  //       </li>
  //     ))}
  //   </ul>
  // );
}
