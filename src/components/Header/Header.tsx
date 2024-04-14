import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul className="flex gap-[25px] items-center text-white capitalize justify-center font-light text-[20px]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Movies</Link>
        </li>
        <li>
          <Link to="/">Tv shows</Link>
        </li>
        <li>
          <Link to="/">Trending</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
