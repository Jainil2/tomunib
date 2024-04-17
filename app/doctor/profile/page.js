import React from "react";
import { Image } from "@nextui-org/react";
import DoctorNavbar from "../DoctorNavbar";
import Link from "next/link";

const dummyData = {
  specialization: "Cardiologist",
  experience: "5 years",
  education: "MBBS, MD (Cardiology)",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ultricies ante. Nulla facilisi. Sed tristique vehicula ex, sed placerat arcu faucibus sed. Sed hendrerit, felis id blandit ultricies, ipsum velit lobortis mi, vitae interdum dolor nibh eu eros.",
};

const DoctorProfile = () => {
  const { specialization, experience, education, bio } = dummyData;

  return (
    <div className="min-h-screen pb-100">
      {/* <DoctorNavbar /> */}
      <div className="grid grid-cols-4  gap-4 p-5 mt-5">
        <div className="grid col-span-1 min-h-full place-items-center gap-4">
          <Image
            width={200}
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            alt="NextUI Album Cover"
            classNames="m-5"
          />
          <h1 className="text-xl font-medium tracking-wide">
            Dr. Jainil Chauhan
          </h1>
        </div>
        <div className="col-span-3 min-h-full ">
          <h3 className="text-lg text-gray-700 mb-4">{specialization}</h3>
          <div className="doctor-details space-y-2">
            <p className="text-gray-600">Experience: {experience}</p>
            <p className="text-gray-600">Education: {education}</p>
            <p className="text-gray-600 italic">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
