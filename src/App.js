import Row from "./Row"
import './App.css';
import Request from "./request"
import Banner from "./Banner"
import Nav from "./Nav"
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
    <Row title="NETFLIX ORIGINALS" isLargeRow={true} fetchUrl={Request.fetchNetflixOriginals}/>
    <Row title="Trending Now" fetchUrl={Request.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={Request.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={Request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies}/>  
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
