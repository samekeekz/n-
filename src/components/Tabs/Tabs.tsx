type Props = {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const Tabs = ({ activeTab, setActiveTab }: Props) => {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex justify-center rounded-[10px] space-x-4 bg-[#ffffff0d] p-[6px] transition-colors duration-300 ease-in-out">
      <button
        className={`py-2 px-4 rounded-lg focus:outline-none ${
          activeTab === 'movie' ? 'bg-blue-500 text-white' : 'text-[#bab9be]'
        }`}
        onClick={() => handleTabClick('movie')}
      >
        Movies
      </button>
      <button
        className={`py-2 px-4 rounded-lg focus:outline-none ${
          activeTab === 'tv' ? 'bg-blue-500 text-white' : 'text-[#bab9be]'
        }`}
        onClick={() => handleTabClick('tv')}
      >
        TV Shows
      </button>
    </div>
  )
}

export default Tabs
