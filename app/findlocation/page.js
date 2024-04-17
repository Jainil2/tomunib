"use client";
import React from "react";
import { locations } from "../../assets/data/locations";
import { useState, useEffect } from "react";

const FindLocation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredResults = locations.filter((location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };
  const handleLocationClick = (locationName) => {
    router.push(`/finddoctor/${encodeURIComponent(locationName)}`);
  };
  return (
    <div className="relative overflow-hidden">
      {/* <div aria-hidden="true" class="flex absolute -top-96 start-3/5 transform -translate-x-1/2">
    <div class="bg-gradient-to-r from-sky-300 to-sky-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-sky-900 dark:to-sky-900"></div>
    <div class="bg-gradient-to-tl from-sky-50 via-sky-100 to-sky-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-sky-900 dark:via-sky-900 dark:to-sky-900"></div>
</div> */}

      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-5 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto"></div>
        </div>
        <div className="bg-white relative max-w-7xl mx-auto rounded-lg shadow-lg">
          <div>
            <form className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  onChange={handleSearch}
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Location"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {searchTerm == ""
                ? locations.map((items) => (
                    <a
                      class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition  dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href={`/finddoctor/${items.name}`}
                      key={items.toString()}
                    >
                      <div class="p-4 md:p-5">
                        <div class="flex justify-between items-center">
                          <div class="flex items-center">
                            <img
                              class="w-11 h-11 rounded-full"
                              src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                              alt="Image Description"
                            />{" "}
                            <div class="ms-3">
                              <h3 class="group-hover: font-bold text-black-800 dark:group-hover:text-blue-400 dark:text-black-200">
                                {items.name}
                              </h3>
                            </div>
                          </div>
                          <div class="ps-3">
                            <svg
                              class="flex-shrink-0 size-5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))
                : searchResults.map((items) => (
                    <a
                      class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition  dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href={`/finddoctor/${items.name}`}
                      key={items.toString()}
                    >
                      <div class="p-4 md:p-5">
                        <div class="flex justify-between items-center">
                          <div class="flex items-center">
                            <img
                              class="w-11 h-11 rounded-full"
                              src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                              alt="Image Description"
                            />{" "}
                            <div class="ms-3">
                              <h3 class="group-hover: font-bold text-black-800 dark:group-hover:text-blue-400 dark:text-black-200">
                                {items.name}
                              </h3>
                            </div>
                          </div>
                          <div class="ps-3">
                            <svg
                              class="flex-shrink-0 size-5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindLocation;
// "use client";
// import React from "react";
// import { locations } from "../../assets/data/locations";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const FindLocation = () => {
//   // useEffect(() => {
//   //   console.log(locations);
//   // }, []);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const router = useRouter();

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value;
//     setSearchTerm(searchTerm);

//     const filteredResults = locations.filter((location) =>
//       location.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setSearchResults(filteredResults);
//   };

//   const handleLocationClick = (locationName) => {
//     router.push(`/finddoctor/${encodeURIComponent(locationName)}`);
//   };

//   return (
//     <div className="relative overflow-hidden">
//       <div className="bg-white relative max-w-7xl mx-auto rounded-lg shadow-lg">
//         <div>
//           <form className="max-w-md mx-auto">
//             <label
//               htmlFor="default-search"
//               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//             >
//               Search
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg
//                   className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type="search"
//                 id="default-search"
//                 onChange={handleSearch}
//                 className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="Search Location"
//                 required
//               />
//             </div>
//           </form>
//         </div>
//         <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
//             {searchResults.map((location) => (
//               <button
//                 key={location.name}
//                 className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition  dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                 onClick={() => handleLocationClick(location.name)}
//               >
//                 <div className="p-4 md:p-5">
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <img
//                         className="w-11 h-11 rounded-full"
//                         src={location.image}
//                         alt="Image Description"
//                       />
//                       <div className="ms-3">
//                         <h3 className="group-hover: font-bold text-black-800 dark:group-hover:text-blue-400 dark:text-black-200">
//                           {location.name}
//                         </h3>
//                       </div>
//                     </div>
//                     <div className="ps-3">
//                       <svg
//                         className="flex-shrink-0 size-5"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="m9 18 6-6-6-6" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FindLocation;
