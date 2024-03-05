import React from "react";
import { Image } from "@nextui-org/react";

const DoctorProfile = () => {
  return (
    <>
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
          <h1>DoctorData</h1>
        </div>
      </div>
    </>
  );
};

export default DoctorProfile;
