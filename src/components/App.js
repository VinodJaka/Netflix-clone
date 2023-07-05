
import './App.css';
import requests from '../request';
import Row from './Row';
import Nav from './Nav';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
    <Nav />
      <Banner />
      <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals}  isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated } />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentariesMovies} />

          </div>
  );
}

export default App;
