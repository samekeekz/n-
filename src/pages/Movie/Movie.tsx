import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Recommendations from '../../components/Recommendations/Recommendations'

export interface Result {
  backdrop_path?: string
  id: number
  original_title: string
  overview: string
  poster_path: string
  media_type: string
  adult: boolean
  title: string
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Root {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface BelongsToCollection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

const Movie = () => {
  const [movie, setMovie] = useState<Root>()
  const [recommendations, setRecommendations] = useState([])
  const { id } = useParams()

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
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
        setMovie(data)
      }
      fetchData()
    } catch (error) {
      console.error(error)
    }
  }, [id])

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
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
        setRecommendations(data.results)
        console.log(data.results)
      }
      fetchData()
    } catch (error) {
      console.error(error)
    }
  }, [id])

  return (
    <section className="flex items-start gap-10">
      <div className="flex flex-col gap-10 items-start">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.original_title}
          className="w-full grow rounded-[20px]"
        />
        <div className="flex justify-center rounded-[10px] p-8 bg-[#697791]">
          <aside className="mr-8">
            <div className="cover rounded-lg overflow-hidden">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                  alt="Godzilla x Kong: The New Empire"
                  className="w-full"
                />
              </div>
            </div>
          </aside>
          <div className="body text-white">
            <h1 className="title text-3xl font-bold mb-4">
              {movie?.belongs_to_collection.name}
            </h1>
            <div className="status mb-4">
              <span className="imdb mr-4">
                <i className="fa-solid fa-star"></i> {movie?.vote_average}
              </span>
              <span>{movie?.runtime} min</span>
            </div>
            <p className="text-lg mb-6">{movie?.overview}</p>
            <div className="meta grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div>
                <div className="font-bold">Genre:</div>
                <span>
                  {movie?.genres.map(({ id, name }) => (
                    <a
                      href={`/genre/${id}`}
                      className="text-blue-300"
                      key={name}
                      title="Action Movies, TV-Shows"
                    >
                      {name}
                    </a>
                  ))}
                </span>
              </div>
              <div>
                <div className="font-bold">Release:</div>
                <span>{movie?.release_date}</span>
              </div>
              <div>
                <div className="font-bold">Production:</div>
                <span>
                  {movie?.production_companies.map(({ id, name }) => (
                    <a
                      href={`/company/${id}`}
                      className="text-blue-300"
                      key={name}
                      title="Warner Bros. Pictures Movies, TV-Shows"
                    >
                      {name}
                    </a>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {recommendations.length > 0 ? (
        <Recommendations recommendations={recommendations} />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}

export default Movie
