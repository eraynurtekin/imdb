"use client";
import React, { useEffect, useState } from 'react'
import { MdOutlineLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), [])

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted && (currentTheme === "dark" ? (
        <MdOutlineLightMode className='text-xl cursor-pointer hover hover:text-amber-500' onClick={() => setTheme("light")} />
      ) : (
        <BsFillMoonFill className='text-xl cursor-pointer hover hover:text-amber-500' onClick={() => setTheme("dark")} />
      ))}
    </>
  )
}
