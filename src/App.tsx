import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './layout/Layout'
import Movie from './pages/Movie/Movie'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
      </Route>
    </Routes>
  )
}

export default App
