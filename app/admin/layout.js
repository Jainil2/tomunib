import React from "react";
import Link from "next/link";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <div className="py-1 font-sans text-lg bg-fixed bg-gray-700 text-white dark:bg-slate-800 dark:text-white">
        <nav className="flex justify-center">
          <ul className="hidden text-base md:flex space-x-6 tracking-wide transition duration-300 ease-in-out">
            <li>
              <Link href="/admin/category" className="hover:font-semibold">
                AddCategory
              </Link>
            </li>
            <li>
              <Link href="/admin/adddoctor" className="hover:font-semibold">
              AddDoctor
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default AdminLayout;
