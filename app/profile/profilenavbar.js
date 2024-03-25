import React from 'react'
import Link from "next/link";

export default function Profilenavbar(){
  return (
    <div className="py-1 font-sans text-lg bg-fixed bg-gray-700 text-white dark:bg-slate-800 dark:text-white">
      <nav className="flex justify-center">
        <ul className="hidden text-base md:flex space-x-6 tracking-wide transition duration-300 ease-in-out">
          <li>
            <Link href="/profile" className="hover:font-semibold">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/profile/doctors" className="hover:font-semibold">
              Appoinment 
            </Link>
          </li>
          <li>
            <Link href="/profile/pdata" className="hover:font-semibold">
              Health data
            </Link>
          </li>
          <li>
            <Link href="/profile/healthdata" className="hover:font-semibold">
              Health Record
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

