import React, { useState, useEffect } from 'react';
import instance from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const base_url = "https:image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    //movies is a variable 
    //setMovies is a function used to update the value of var movies
    //value of movies is an empty array

    useEffect(() => {
        //if [], run once and dont run again
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            // https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
            //fetchUrl is appended to axios
            //axios = https://api.themoviedb.org/3

            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const [trailerUrl, setTrailerUrl] = useState("");

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            // if there is a trailer playing and we click then it will stop
            setTrailerUrl('');
        }
        else {
            movieTrailer(movie?.name || " ") // movieTrailer recieves a trailer URL as  url
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));   //gets the trailer url and sets the value of trailerUrl
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={()=>handleClick(movie)}
                        className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
                        //rowPoster will always applied
                        //if isLargeRow is true then only rowPosterLarge will be applied
                        //this is for the NETFLIX OROGINALS part
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
        </div>
    )
}

export default Row