import { useEffect, useState } from 'react'
import List from '../../components/List/List'
import Tabs from '../../components/Tabs/Tabs'

const Home = () => {
  const [data, setData] = useState([])
  const [activeTab, setActiveTab] = useState('movie')

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/${activeTab}/day?language=en-US`,
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
        const dataFromServer = await response.json()
        setData(dataFromServer.results)
        console.log(dataFromServer)
      }
      fetchData()
    } catch (error) {
      console.error(error)
    }
  }, [activeTab])

  return (
    <div className="">
      <div className="flex w-full justify-between items-center mb-5">
        <h2 className="uppercase text-[#bab9be] font-medium">Recommended</h2>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {data.length > 0 ? (
        <List movies={data} />
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  )
}

export default Home
