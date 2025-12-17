import { useState, useEffect } from "react";
import Header from './components/Header';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import MovieSearch from "./components/MovieSearch"; // Component MovieSearch
import { MovieContext, MovieProvider } from "./context/MovieProvider";

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]); 
  // SỬA LỖI: Đổi tên biến state để không trùng với tên component
  const [searchedMovies, setSearchedMovies] = useState([]); 

  const handleSearch = async (searchVal) => {
    // SỬA LỖI: Sử dụng tên biến state mới
    setSearchedMovies([]); 
    try {
      const apiKey = import.meta.env.VITE_API_KEY; // Lấy key ra
      // Thêm &api_key= vào URL
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&api_key=${apiKey}&include_adult=false&language=vi&page=1`;
      //const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          //Authorization: `Bearer  ${import.meta.env.VITE_API_KEY}`
        },
      };
      const searchResponse = await fetch(url, options); // Đổi tên biến để tránh trùng lặp nếu có
      const data = await searchResponse.json();
      // SỬA LỖI: Sử dụng tên biến state mới
      setSearchedMovies(data.results); 
      
    } catch (error) {
      console.log(error);
    }
  }
  

  useEffect(() => { 
    const fechMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          //Authorization: `Bearer  ${import.meta.env.VITE_API_KEY}`
        }
      };
      const apiKey = import.meta.env.VITE_API_KEY;
      const url1 = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=vi&page=1`;
      const url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=vi&page=1`;
    //  const url1 = 'https://api.themoviedb.org/3/tv/popular?language=vi&page=1';
    //  const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';
      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fechMovie();
  },[]);

  return (
    <>
    <MovieProvider>
      <div className='bg-black pb-10'>
        <Header onSearch={handleSearch}/>
        <Banner/>
        {/* SỬA LỖI: Sử dụng tên biến state mới và truyền props đầy đủ */}
        {searchedMovies.length > 0 ? ( 
          <MovieSearch title={"Kết quả tìm kiếm"} data={searchedMovies} />
        ) : (
          <>
            <MovieList title={"Phim Hot"} data={movie} />
            <MovieList title={"Phim đề cử"} data={movieRate} />
        
          </>
        )}
      </div> 
      </MovieProvider>
    </>
  );
}
export default App;