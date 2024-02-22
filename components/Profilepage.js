import logo from "@/public/images/logo.png";
import Image from "next/image";
import pro from "@/public/images/62.jpg";
import Link from "next/link";
import Appointmentdata from "@/public/data/profile.json";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { WeightHistoryChart } from "@/components/chart.js"

export default function Profilepage() {
  const weightHistoryData = [
    { date: '2022-01-01', weight: 70 },
    { date: '2022-02-01', weight: 68 },
    // Add more data entries as needed
  ];

  return (
    <div className="font-sans antialiased">
      <div className="font-sans text-lg bg-fixed bg-gray-700 text-white dark:bg-slate-800 dark:text-white">
        <nav className="flex justify-center">
          <ul className="hidden text-base md:flex space-x-6 tracking-wide transition duration-300 ease-in-out">
            <li>
              <Link href="/" className="hover:font-semibold">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="hover:font-semibold">
                Health Record
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:font-semibold">
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="grid grid-cols-4 h-40 bg-gradient-to-b from-slate-200 to-white pt-7">
        <div className="col-span-1 pl-20">
          <Image
            src={pro}
            height={100}
            width={100}
            className="rounded-full border-solid border-4 border-white"
            alt="Profile photo"
          />
        </div>
        <div className="col-span-3 text-lg pl-10">
          <ul>
            <li>
              <h2> Name : Jainil Chauhan</h2>
            </li>
            <li>
              <h4>Gender : Male</h4>
            </li>
            <li>
              <h4>Age : 20</h4>
            </li>
          </ul>
        </div>
      </div>
      {/* <WeightHistoryChart data={weightHistoryData} /> */}
      <h3 className="text-xl flex justify-center font-medium tracking-wide underline underline-offset-8 decoration-gray-500">
        Appoinment History
      </h3>
      <table className="min-w-full border-2 border-gray-300 mt-10 font-normal outline-offset-4">
        <thead>
          <tr>
            <th className="border-2 border-gray-300 p-2">Doctor</th>
            <th className="border-2 border-gray-300 p-2">Date</th>
            <th className="border-2 border-gray-300 p-2">Time</th>
            <th className="border-2 border-gray-300 p-2">Reason</th>
            <th className="border-2 border-gray-300 p-2">Check-up</th>
          </tr>
        </thead>
        <tbody>
          {Appointmentdata.list_of_appointment.map((rowData, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2 w-64">
                {rowData.name_of_doctor}
              </td>
              <td className="border border-gray-300 p-2 w-64">
                {rowData.appointment_date}
              </td>
              <td className="border border-gray-300 p-2 w-64">
                {rowData.appointment_time}
              </td>
              <td className="border border-gray-300 p-2 w-64">
                {rowData.resone}
              </td>
              <td className="border border-gray-300 pt-2 pb-2 pl-20 w-64">
                <FaArrowAltCircleRight />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
