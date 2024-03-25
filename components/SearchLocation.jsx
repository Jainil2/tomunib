import React from "react";
import { locations } from "../../assets/data/locations";
import Footer from "../Footer/footer";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const SearchLocation = () => {
  return (
    <>
    <div>
    < div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
      {locations.map((items)=>
      
        (

    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition  dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
          <img class="w-11 h-11 rounded-full" src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>            <div class="ms-3">
              <h3 class="group-hover: font-bold text-black-800 dark:group-hover:text-blue-400 dark:text-black-200">
                {items.name}
              </h3>
            </div>
          </div>
          <div class="ps-3">
            <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </a>
   
        ))}
         </div>
    </div>
    <Footer/>
    </div>
    
 
            
             
                
           
     
   
    </>
  );
};

export default SearchLocation;
