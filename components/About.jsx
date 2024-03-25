// import React from "react";
import images4 from "../assets/images/doctor1.jpg";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className=" relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <Image src={images4} alt="About Me" />
            {/* <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px]  right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        <img src={aboutcard} alt="" />
                    </div> */}
          </div>
          {/* -----about content ------*/}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading"> Proud to be one of the nations best</h2>
            <p className="text_para">
              Doctors play a crucial. These highly skilled professionals
              dedicate years to rigorous education and training to acquire the
              knowledge. Doctors work in diverse specialties, ranging who
              provide comprehensive healthcare to specialists focusing on
              specific organs or medical fields.{" "}
            </p>
            <p className="text_para mt-[30px]">
              The trust placed in doctors is significant, as individuals rely on
              them not only for medical expertise but also for guidance,
              empathy, and support during times, do enhancing the quality of
              life for individuals ating to the overall well-bein ciety.
            </p>
            <div className="justify-center">
              <Link href="/about">
                <button className="btn"> Learn More</button>
              </Link>
            </div>

            {/* <Link to = "/doctor"></Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
