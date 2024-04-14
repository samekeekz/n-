import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul className="flex gap-[25px] items-center text-white capitalize justify-center font-light text-[20px]">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/tv">Tv shows</NavLink>
        </li>
        <li>
          <NavLink to="/trending">Trending</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
