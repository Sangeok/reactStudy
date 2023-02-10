// App component를 가지게 됨.
// router는 URL을 보고 있는 component를 의미
import Movie from "../components/Movie.js";
import {useState, useEffect} from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
    // = getMovies()
    // fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    // .then((response)=>response.json())
    // .then((json)=>{
    //   setMovies(json.data.movies);
    //   setLoading(false)
    // });
  }, []);

  return (
    <div>
      {loading ? <h1>Loding...</h1> : 
        <div>{movies.map((movies)=> (
          <Movie
          key = {movies.id}
          id = {movies.id}
          coverImg = {movies.medium_cover_image}
          title = {movies.title}
          summary = {movies.summary}
          genres= {movies.genres}
          />
        ))}</div>
      }

    </div>
  );
}

export default Home;

