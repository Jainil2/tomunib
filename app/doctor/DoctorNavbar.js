import React from "react";
import Link from "next/link";
const DoctorNavbar = () => {
  return (
    <div className="py-1 font-sans text-lg bg-fixed bg-gray-700 text-white dark:bg-slate-800 dark:text-white">
      <nav className="flex justify-center">
        <ul className="hidden text-base md:flex space-x-6 tracking-wide transition duration-300 ease-in-out">
          <li>
            <Link href="/profile/doctors" className="hover:font-semibold">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/doctors/data" className="hover:font-semibold">
              patient
            </Link>
          </li>
          <li>
            <Link
              href="/profile/doctors/Holiday"
              className="hover:font-semibold"
            >
              Holiday
            </Link>
          </li>
          <li>
            <Link href="/prescription" className="hover:font-semibold">
              New
            </Link>
          </li>
          <li>
            <Link href="/profile/pdata" className="hover:font-semibold"></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DoctorNavbar;
