import React, { useEffect, useState } from "react";
import "./Home.scss";
import Header from "../Header/Header" 
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const apiKey = `${process.env.REACT_APP_APIKEY}`;
console.log(process.env, "key");
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const imgUrl = "https://image.tmdb.org/t/p/original";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upcomingmovies, setUpcomingmovies] = useState([]);
  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingmovies(results);
    };

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setnowPlayingMovies(results);
    };

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}&page=3`);
      setpopularMovies(results);
    };

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      settopRatedMovies(results);
    };
    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
    };

    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
    getAllGenre();
  }, []);

  return (
    <section className="home">
      <Header />
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[9]
            ? `url(${`${imgUrl}/${popularMovies[9].poster_path}`})`
            : "rgb(16,16,16)",
        }}
      >
        {popularMovies[9] && <h1>{popularMovies[9].original_title}</h1>}
        {popularMovies[9] && <p>{popularMovies[9].overview}</p>}

        <div className="home_button">
          <button>
            <BsFillPlayFill />
            Play
          </button>
          <button>
            My List
            <AiOutlinePlus />
          </button>
        </div>
      </div>

      <Row title={"Upcoming"} arr={upcomingmovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />

      <div className="genreBox">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className="footer-content">
          <div className="footer-section">
            <ul>
              <li>
                <a href="#">Audio Description</a>
              </li>
              <li>
                <a href="#">Investor Relation</a>
              </li>
              <li>
                <a href="#">Legal Notice</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Cookie Preference</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li>
                <a href="#">Gift cards</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li>
                <a href="#">Media center</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2023 Netflix Clone. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default Home;
