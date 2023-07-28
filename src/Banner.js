//rfce
import React, { useEffect, useState } from 'react';
import requests from './requests';
import instance from './axios';
import './Banner.css'

function Banner() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
        }
        fetchData();
    }, []);

   

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+"..." : str;
    }
    return (
        <header>
            <div className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https:image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                    backgroundPosition: "center center",
                }}>
                <div className="bannerContent">

                    {/* title */}
                    <h1 className='bannerTitle'>{movies?.title || movies?.name || movies?.original_name}</h1>

                    {/* div 2 buttons */}
                    <div className="bannerButtons">
                        <div className="bannerButton">Play</div>
                        <div className="bannerButton">My List</div>
                    </div>

                    {/* description */}
                    <h2 className='bannerDescription'>{movies?.overview}
                    {truncate(movies?.overview, 100)}
                    </h2>

                </div>
                <div className="bannerFadeBottom"></div>
            </div>


            
        </header>
    )
}

export default Banner