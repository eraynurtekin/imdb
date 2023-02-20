"use client";
import { useEffect } from 'react';
import React from 'react'

export default function Error({ error, reset }) {
  //This useEffect always checks errors. If an error happens, it will write in console.log().
  useEffect(() => {
    console.log(error);

  }, [error])
  return (
    <div className='text-center mt-10 '>
      <h1>Something went wrong</h1>
      <button className='hover:text-amber-700' onClick={() => reset()}>Try Again</button>
    </div>
  )
}
