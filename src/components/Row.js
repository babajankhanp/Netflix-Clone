import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "../axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //get movies based on url
  const getMovies = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };

  //fetch the data on first commit
  useEffect(() => {
    getMovies();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const hadleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const name =
        movie?.name ||
        movie?.original_name ||
        movie?.title ||
        movie?.original_title;
      console.log(name);
      movieTrailer(name)
        .then((url) => {
          console.log(url);
          // https://www.youtube.com/watch?v=
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => hadleClick(movie)}
              key={movie.id}
              src={`${baseUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`poster ${isLarge && "posterLarge"}`}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
