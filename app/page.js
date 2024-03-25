// // import { LoginForm } from "@/components/LoginForm";
// // import { getServerSession } from "next-auth";
// // import { redirect } from "next/navigation";
// // // import {handler} from "@/app/api/auth/[...nextauth]/route";

// // export default async function Home({ Component, pageProps }) {
// //   const session = await getServerSession();
// //   if(session) {
// //     redirect("/secret");
// //   }
// //   return (
// //     <>
// //       {/* <Component {...pageProps} /> */}
// //       <>
// //         <LoginForm/>
// //       </>
// //     </>
// //   );
// // }
// import appintment from "../assets/images/doctor1.jpg";
// import findadoc from "../assets/images/icon01.png";
// import images4 from "../assets/images/icon03.png";
// import locationicon from "../assets/images/icon02.png";
// import faqImage from "../assets/images/faq-Image.png";
// import FaqList from "../components/FaqList";
// import Testimonial from "../components/Testimonial";
// import Link from "next/link";
// import { BsArrowRight } from "react-icons/bs";
// import About from "../components/About";
// import Image from "next/image";

// const Home = () => {
//   return (
//     <>
//       {/* hero section */}
//       <section className=" hero_section pt-[60px] 2xl:h-[800px]">
//         <div className="bg-hero">
//           <div>
//             <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
//               {/* hero content */}
//               <div>
//                 <div className="lg:w-[570px]">
//                   <h1 className="text-[36px] leading-[46px] text-black font-[800] md:text-[60px] md:leading-[70px]">
//                     We help patients live a healthy,longer life.
//                   </h1>
//                   <p className="text_para text-white">
//                     jnsdkjf i onoifne iafisfonsdfin
//                   </p>

//                   <button className="btn">Request an Appointment</button>
//                 </div>
//                 {/* -------------hero counter-*/}
//                 <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
//                   <div>
//                     <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
//                       30+
//                     </h2>
//                     <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
//                     <p className="text_para"> Years of Experience</p>
//                   </div>
//                   <div>
//                     <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
//                       17+
//                     </h2>
//                     <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
//                     <p className="text_para">Clinic Location</p>
//                   </div>
//                   <div>
//                     <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
//                       100%
//                     </h2>
//                     <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
//                     <p className="text_para">Patient Satisfaction</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/*-------hero content-------*/}
//             <div className="flex gap-[30px] justify-end">
//               <div className="border-none"></div>
//             </div>
//           </div>
//         </div>
//         {/* </div> */}
//       </section>

//       {/*-------hero section end------*/}
//       <section>
//         <div className="container">
//           <div className="lg:w-[470px] mx-auto">
//             <h2 className="heading text-center">
//               Providing the best Medical Services
//             </h2>
//             <p className="text_para text-center">blah blah blah</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
//             <div className="py-[30px] px-5">
//               <div className="flex items-center justify-center">
//                 <Image src={findadoc} alt="" />
//               </div>

//               <div className="mt-[30px]">
//                 <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
//                   Find a doctor
//                 </h2>
//                 <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
//                   World class care for you.We offer expert health care
//                   services,from lab to clinic.
//                 </p>

//                 <Link
//                   href="/trial"
//                   className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
//                 >
//                   <BsArrowRight></BsArrowRight>
//                 </Link>
//                 <div style={{ backgroundColor: "lilac" }}>
//                   {/* <a href="/doctor"  className="blueLink"> <BsArrowRight className="group-hover:text-white w-6 h-5" /></a> */}
//                 </div>
//               </div>
//             </div>

//             <div className="py-[30px] px-5">
//               <div className="flex items-center justify-center">
//                 <Image src={locationicon} alt="" />
//               </div>

//               <div className="mt-[30px]">
//                 <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
//                   Find a Location
//                 </h2>
//                 <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
//                   World class care for you.We offer expert health care
//                   services,from lab to clinic.
//                 </p>
//                 <div style={{ backgroundColor: "lilac" }}>
//                   <Link
//                     href="/location"
//                     className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
//                   >
//                     <BsArrowRight></BsArrowRight>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="py-[30px] px-5">
//               <div className="flex items-center justify-center">
//                 <Image src={images4} alt="" />
//               </div>

//               <div className="mt-[30px]">
//                 <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
//                   Book Appointment
//                 </h2>
//                 <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
//                   World class care for you.We offer expert health care
//                   services,from lab to clinic.
//                 </p>
//                 <div style={{ backgroundColor: "lilac" }}>
//                   <Link
//                     href="/findoctor"
//                     className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
//                   >
//                     <BsArrowRight></BsArrowRight>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <About />
//       {/* -------services section----------- */}
//       <section>
//         <div className="container">
//           <div className="xl:w-[470px] mx-auto">
//             <h2 className="heading text-center"> Our Medical Services</h2>
//             <p className="text_para text-center">worls calss docs</p>
//             <div style={{ backgroundColor: "lilac" }}>
//               <Link
//                 href="/serviceList"
//                 className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
//               >
//                 <BsArrowRight></BsArrowRight>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*---------FAQ Section-----------*/}
//       <section>
//         <div className="container">
//           <div className="flex justify-between gap-[50px] lg:gap-0">
//             <div className="w-1/3   hidden md:block">
//               <Image className="" src={faqImage} alt=""></Image>
//             </div>
//             <div className="w-full md:w-1/2">
//               <h2 className="heading">
//                 {" "}
//                 Most questions by our beloved patients
//               </h2>
//               <FaqList />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/*-------Testimaonial---&----Footer-----------*/}
//       <section>
//         <div className="container">
//           <div className="xl:w-[480px] mx-auto">
//             <h2 className="heading justify-center pb-8 ">What our users say</h2>
//           </div>
//         </div>
//         <Testimonial />
//       </section>
//     </>
//   );
// };

// export default Home;
"use client";
import React from "react";
import appintment from "../assets/images/doctor1.jpg";
import findadoc from "../assets/images/icon01.png";
import images4 from "../assets/images/icon03.png";
import locationicon from "../assets/images/icon02.png";
import faqImage from "../assets/images/faq-img.png";
import FaqList from "../components/FaqList";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import About from "../components/About";
import Bgvdo from "../components/Bgvdo";
import Image from "next/image";

const Home = () => {
  const router = useRouter();
//   const handlenavigate = (pro) => {
//     router.push({pro});
// };
  return (
    <>
      {/* hero section */}
      <section className=" hero_section pt-[60px] 2xl:h-[800px]">
        <div className="bg-hero">
          <div>
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* hero content */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-black font-[800] md:text-[60px] md:leading-[70px]">
                    We help patients live a healthy,longer life.
                  </h1>
                  <p className="text_para text-white">
                    jnsdkjf i onoifne iafisfonsdfin
                  </p>

                  <button
                    className="btn"
                    onClick={() => router.push("/bookaptmnt")}
                  >
                    Request an Appointment
                  </button>
                </div>
                {/* -------------hero counter-*/}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para"> Years of Experience</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      17+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para">Clinic Location</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            {/*-------hero content-------*/}
            <div className="flex gap-[30px] justify-end">
              <div className="border-none"></div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      {/*-------hero section end------*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best Medical Services
            </h2>
            <p className="text_para text-center">blah blah blah</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <Image src={findadoc} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World class care for you.We offer expert health care
                  services,from lab to clinic.
                </p>

                <Link
                  href="/service"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight></BsArrowRight>
                </Link>
                <div style={{ backgroundColor: "lilac" }}>
                  {/* <a href="/doctor"  className="blueLink"> <BsArrowRight className="group-hover:text-white w-6 h-5" /></a> */}
                </div>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <Image src={locationicon} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World class care for you.We offer expert health care
                  services,from lab to clinic.
                </p>
                <div style={{ backgroundColor: "lilac" }}>
                  <Link
                    href="/location"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight></BsArrowRight>
                  </Link>
                </div>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <Image src={images4} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World class care for you.We offer expert health care
                  services,from lab to clinic.
                </p>
                <div style={{ backgroundColor: "lilac" }}>
                  <Link
                    href="/findoctor"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight></BsArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      {/* -------services section----------- */}
      <section>
        {" "}
        <Bgvdo />
      </section>

      {/* <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> Our Medical Services</h2>
            <p className="text_para text-center">worls calss docs</p>
            <div style={{ backgroundColor: "lilac" }}>
              <Link
                to="/serviceList"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight></BsArrowRight>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      {/*---------FAQ Section-----------*/}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/3   hidden md:block">
              <Image className="" src={faqImage} alt=""></Image>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                {" "}
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/*-------Testimaonial---&----Footer-----------*/}
      <section>
        <div className="container">
          <div className="xl:w-[480px] mx-auto">
            <h2 className="heading justify-center pb-8 ">What our users say</h2>
          </div>
        </div>
        <Testimonial />
      </section>
    </>
  );
};

export default Home;
