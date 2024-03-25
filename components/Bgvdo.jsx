import React from "react";
import vc from "../assets/images/vc2.mp4";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

const Bgvdo = () => {
  const router = useRouter();
  return (
    <div
      className="relative flex item-center justify-center h-screen"
      onClick={() => router.push("./service")}
    >
      <div className="video-wrapper">
        <video
          className="absolute inset-x-0 object-cover"
          src={vc}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="relative ">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="py-10 text-center text-5xl font-serif text-sky-50">
            {" "}
            Our Medical Services
          </h2>
          <h1 className="text-center text-white">
            Click here to view our services
          </h1>
          {/* <p className=" py-5 text-center">worls calss docs</p> */}
        </div>
      </div>
    </div>
  );
};

export default Bgvdo;
