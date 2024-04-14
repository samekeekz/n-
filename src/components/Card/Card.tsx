import { Link } from 'react-router-dom'

type Props = {
  id: string
  title?: string
  releaseDate: string
  poster: string
}

const Card = ({ id, title, releaseDate, poster }: Props) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="font-poppins max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-[10px] overflow-hidden relative cursor-pointer">
        <div className="group relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={title}
            className="w-full transition-transform transform duration-300"
          />
          <div className="absolute inset-0 flex justify-center duration-300 items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-player-play-filled duration-300 transition-transform transform-gpu group-hover:scale-90"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#5795F7"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                stroke-width="0"
                fill="#5795F7"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent text-white px-4 py-2 text-shadow">
          <div className="font-medium text-sm mb-1">{title}</div>
          {releaseDate && (
            <div className="text-[#bab9be] text-sm flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-calendar-week"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M4 11h16" />
                <path d="M8 14v4" />
                <path d="M12 14v4" />
                <path d="M16 14v4" />
              </svg>
              {releaseDate}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default Card
