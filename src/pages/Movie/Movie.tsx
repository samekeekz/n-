import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
  return (
    <section
      id="glass-info"
      className="flex justify-center rounded-[10px] p-8 bg-[#697791]"
    >
      <aside className="mr-8">
        <div className="cover rounded-lg overflow-hidden">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
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
          <span className="rating mr-4">PG-13</span>
          <span className="quality mr-4">CAM</span>
          <span>{movie?.runtime} min</span>
          <span className="box-rating ml-8" data-id="72040" data-score="7.96">
            <span className="stars">
              <span className="active">
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="active">
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="active">
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="active">
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-regular fa-star"></i>
              </span>
            </span>
            <span>
              <b>7.96</b>
              <sup>
                /<b>10</b>
              </sup>
            </span>
            <span className="text-muted">
              (<span style={{ display: 'none' }}>2325</span>
              2,325 reviews)
            </span>
          </span>
        </div>
        <p className="text-lg mb-6">{movie?.overview}</p>
        <div className="meta grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div>
            <div className="font-bold">Type:</div>
            <span>
              <a href="movie" className="text-blue-300">
                Movie
              </a>
            </span>
          </div>
          <div>
            <div className="font-bold">Country:</div>
            <span>
              <a
                href="/country/united-states"
                className="text-blue-300"
                title="United States Movies, TV-Shows"
              >
                United States
              </a>
              ,{' '}
              <a
                href="/country/australia"
                className="text-blue-300"
                title="Australia Movies, TV-Shows"
              >
                Australia
              </a>
            </span>
          </div>
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
            <div className="font-bold">Director:</div>
            <span>
              <a href="/director/adam-wingard" className="text-blue-300">
                <span>Adam Wingard</span>
              </a>
            </span>
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
          <div>
            <div className="font-bold">Cast:</div>
            <span>
              <a href="/star/rebecca-hall" className="text-blue-300">
                Rebecca Hall
              </a>
              ,{' '}
              <a href="/star/dan-stevens" className="text-blue-300">
                Dan Stevens
              </a>
              ,{' '}
              <a href="/star/brian-tyree-henry" className="text-blue-300">
                Brian Tyree Henry
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Movie
