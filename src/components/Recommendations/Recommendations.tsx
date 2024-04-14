import React from 'react'

interface Result {
  id: string
  title: string
  vote_average: number
  release_date: string
  poster_path: string
}

interface RecommendationsProps {
  recommendations: Result[]
}

const Recommendations: React.FC<RecommendationsProps> = ({
  recommendations,
}) => {
  console.log(recommendations)

  return (
    <section className="min-w-[310px] shrink-0 rounded-[20px] bg-[#697791]">
      <div className="head p-5">
        <h2 className="text-center uppercase font-medium text-[#bab9be]">
          You Might Also Like
        </h2>
      </div>
      <div className="frame landscape-i">
        {recommendations.map((recommendation, index) => (
          <a
            key={index}
            className="p-[14px] flex gap-3 odd:bg-[#0000000d]"
            href={`/movie/${recommendation.id}`}
          >
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w92${recommendation.poster_path}`}
                alt={recommendation.title}
                className="ml-5 w-[35px] h-[50px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-white">{recommendation.title}</h5>
              <div className="flex gap-5 text-[#a09fa5] text-sm">
                <p>{recommendation.vote_average}</p>
                <p>Movie</p>
                <p>{recommendation.release_date}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Recommendations
