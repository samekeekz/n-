import { useState } from 'react'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('movies')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex justify-center space-x-4">
      <button
        className={`py-2 px-4 rounded-lg focus:outline-none ${
          activeTab === 'movies' ? 'bg-blue-500 text-white' : 'text-gray-500'
        }`}
        onClick={() => handleTabClick('movies')}
      >
        Movies
      </button>
      <button
        className={`py-2 px-4 rounded-lg focus:outline-none ${
          activeTab === 'tvShows' ? 'bg-blue-500 text-white' : 'text-gray-500'
        }`}
        onClick={() => handleTabClick('tvShows')}
      >
        TV Shows
      </button>
    </div>
  )
}

export default Tabs
