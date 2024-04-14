import Card from '../Card/Card'

export type Movies = {
  movies: Movie[]
}

export type Movie = {
  id: string
  original_title: string
  name?: string
  release_date: string
  poster_path: string
}

const List = ({ movies }: Movies) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
      {movies.length > 0 &&
        movies.map((movie) => (
          <Card
            id={movie.id}
            key={movie.original_title}
            title={movie.original_title || movie.name}
            releaseDate={movie.release_date}
            poster={movie.poster_path}
          />
        ))}
    </div>
  )
}

export default List
