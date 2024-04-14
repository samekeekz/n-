import { useEffect, useState } from 'react'
import List from '../../components/List/List'
import Tabs from '../../components/Tabs/Tabs'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/all/day?language=en-US',
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTMyMjRlNmI4OGQzY2Y3OTZmNjJiNDA4Y2I1MjhkYiIsInN1YiI6IjY2MWJmMTEwYTRhZjhmMDE3YzM2ZmQ1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FdsWIE47QwDxR_g0fu87YukNqnQ7NGb_LAujf1fGyco',
            },
          }
        )

        if (!response.ok) return console.error('Error:', response.statusText)
        const data = await response.json()
        setMovies(data.results)
        console.log(data)
      }
      fetchData()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div className="">
      <div className="flex w-full justify-between items-center mb-5">
        <p>Recommended</p>
        <Tabs />
      </div>
      <List movies={movies} />
    </div>
  )
}

export default Home
