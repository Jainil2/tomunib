// import React from "react";
// import { services } from "../../assets/data/services";
// import Footer from "../Footer/footer";
// import FindDoctor from "../../pages/FindDoctor";
// const ServiceList = () => {
//   //   services.map((item)=>{ console.warn("My name is :" , item.name)})
//   return (
//     <>
//       <div >
//         <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-3">
//           {services.map((item) => (
//             <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
//               <div class="group relative  overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
//                 <span className="absolute flex top-left z-0 h-20 w-20 rounded-full bg-slate-200 transition-all duration-300 group-hover:scale-[11] "></span>
//                 <div className="relative z-10 mx-auto max-w-md hover:font-bold">
//                   <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-slate-200">
//                     <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNtuvsOKCgAZyTuP_5t_oWa9SS2jrEB3-tQ&usqp=CAU"></img>
//                   </span>
//                   <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-black/90">
//                     <p>{item.name}</p>{" "}
//                     <p>
//                       Perfect for learning how the framework works, prototyping
//                       a new idea, or creating a demo to share online.
//                     </p>
//                   </div>
//                   <div className="pt-5 text-base font-semibold leading-7">
//                     <p>
//                       <a
//                         href={FindDoctor}
//                         class="text-sky-500 transition-all duration-300 group-hover:text-black"
//                       >
//                         Read the docs ;
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <Footer/>
//       </div>
//     </>
//   );
// };

// export default ServiceList;
"use client";
import React from "react";
import { services } from "../../assets/data/services";
import Footer from "../../components/Footer";
import FindDoctor from "../finddoctor/page";
import { useRouter } from "next/navigation";

const ServiceList = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
              onClick={() =>
                router.push("/finddoctor",{ state: { sevicename: item.name } })
              }
            >
              <div class="group relative  overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute flex top-left z-0 h-20 w-20 rounded-full bg-slate-200 transition-all duration-300 group-hover:scale-[11] "></span>
                <div className="relative z-10 mx-auto max-w-md hover:font-bold">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-slate-200">
                    <img
                      className="rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNtuvsOKCgAZyTuP_5t_oWa9SS2jrEB3-tQ&usqp=CAU"
                    ></img>
                  </span>
                  <div className="space-y-6 pt-2 text-2xl  text-center  text-gray-600 transition-all duration-300 group-hover:text-black/90">
                    <p>{item.name}</p>{" "}
                    <p className="text-base">
                      Perfect for learning how the framework works, prototyping
                      a new idea, or creating a demo to share online.
                    </p>
                  </div>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <button class="text-sky-500 transition-all duration-300 group-hover:text-black">
                        Search Doctor ;
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ServiceList;
