import React from "react";
import { Avatar } from "@nextui-org/react";
import Appointmentdata from "@/public/data/profile.json";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

const Appoinment = () => {
  return (
    <div>
      <h3 className="text-2xl flex justify-center mb-20 mt-10 font-medium tracking-wide underline underline-offset-8 decoration-gray-500">
        Appoinment History
      </h3>
      <table
        className="w-full shadow-md mb-5 pb-5 rounded-lg table-auto"
        style={{ margin: "20px auto", maxWidth: "95%", borderRadius: "10px" }}
      >
        <thead>
          <tr className="">
            <th className="py-2">Doctor</th>
            <th className="py-2">Date</th>
            <th className="py-2">Time</th>
            <th className="py-2">Reason</th>
            <th className="py-2">Check-up</th>
          </tr>
        </thead>
        <tbody>
          {Appointmentdata.list_of_appointment.map((rowData, index) => (
            <tr key={index} className="text-center">
              <td className="p-3">
                <span className="flex ml-10">
                  <Avatar
                    className="mr-1"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  />
                  <div className="pt-2 ml-1">{rowData.name_of_doctor}</div>
                </span>
              </td>
              <td className="p-3">{rowData.appointment_date}</td>
              <td className="p-3">{rowData.appointment_time}</td>
              <td className="p-3">{rowData.resone}</td>
              <td className="flex pt-3 justify-center items-center">
                <Link href="/profile/prescription">
                  <FaArrowAltCircleRight />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appoinment;
