import { React, useEffect, useState } from 'react' //useEffect => reload huni vitti kai data featch
import './App.css'  // 50ff9cb0 
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?apikey=50ff9cb0';

// const movie1 = {
//   Poster : "N/A",
//   Title : "Spiderman",
//   Type : "movie",
//   Year : "1990",
//   imdbID: "tt0100669",
// }

const App = () => {

  const [movies, setMovies] = useState([]);  //default value as empty array
  const [searchTerm, setSearchTerm] =useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); //calls api
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, [])
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder='Search for movies' 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon} 
          alt="search" 
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )
      }

    </div>
  )
}

export default App
