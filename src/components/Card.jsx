import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'
export default function Card({ result }) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path
            }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available" >
        </Image>
        <div className='p-2'>
          <h2 className='truncate text-md font-bold'>{result.title || result.name}</h2>
          <p className='line-clamp-2 text-sm '>{result.overview}</p>
          <p className='flex items-center text-sm'>{result.release_date || result.first_air_date} <BsFillSuitHeartFill className='h-5 mr-1 ml-5' />{result.vote_count} </p>
        </div>
      </Link>
    </div>
  );
}
