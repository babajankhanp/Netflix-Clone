import React from "react";
import request from "./request";
import "./styles.css";

import Banner from "./components/Banner";
import Row from "./components/Row";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Banner url={request.fetchNetflixOriginals} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLarge="true"
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentries} />
    </div>
  );
}
