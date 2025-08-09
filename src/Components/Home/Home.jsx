import axios from "axios";
import React, { useEffect, useState } from "react";
import MediaItem from "../MediaItem/MediaItem";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  const [movies, setTrendingMovies] = useState([]);
  const [tvs, setTrendingTv] = useState([]);
  const [people, setTrendingPeople] = useState([]);

  async function getTrending(mediaItem, callBack) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaItem}/day?api_key=fb0ce91ffb7e4ce36ebe5882861ff595`
    );
    callBack(data.results);
  }

  useEffect(() => {
    getTrending("movie", setTrendingMovies);
    getTrending("tv", setTrendingTv);
    getTrending("person", setTrendingPeople);
  }, []);

  useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);

  return (
    <>
      <div id="moviesSection" className="row">
        <div className="col-md-3 col-lg-4 d-flex align-items-center autoShow mb-3 mb-md-0">
          <div>
            <div className="brdr w-25 mb-3"></div>
            <h2 className="h4">
              Trending <br /> Movies <br /> To Watch Right Now
            </h2>
            <p className="py-2 pColor"> Most Watched Movies by days</p>
            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>
        {movies.map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>

      <div className="glow-line"></div>

      <div className="row" id="tvSection">
        <div className="col-md-3 col-lg-4 d-flex align-items-center autoShow mb-3 mb-md-0">
          <div>
            <div className="brdr w-25 mb-3"></div>
            <h2 className="h4">
              Trending <br /> TV <br /> To Watch Right Now
            </h2>
            <p className="py-2 pColor"> Most Watched TV by days</p>
            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>
        {tvs.map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>

      <div className="glow-line"></div>

      <div className="row" id="peopleSection">
        <div className="col-md-3 col-lg-4 d-flex align-items-center autoShow mb-3 mb-md-0">
          <div>
            <div className="brdr w-25 mb-3"></div>
            <h2 className="h4">
              Trending <br /> People <br /> To Watch Right Now
            </h2>
            <p className="py-2 pColor"> Most Watched People by days</p>
            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>
        {people
          .filter(
            (person) => person.profile_path !== null && person.id !== 5248794
          )
          .map((item, index) => (
            <MediaItem key={index} item={item} />
          ))}
      </div>
    </>
  );
}
