import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './layout/Layout'
import Movie from './pages/Movie/Movie'
import Movies from './pages/Movies/Movies'
import Tv from './pages/Tv/Tv'
import Trending from './pages/Trending/Trending'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="tv" element={<Tv />} />
        <Route path="trending" element={<Trending />} />
      </Route>
    </Routes>
  )
}

export default App
