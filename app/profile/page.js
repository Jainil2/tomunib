"use client";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function Profile() {
//   const router = useRouter();
//   const { data: session } = useSession();
//   useEffect(() => {
//     if (!session) {
//       router.replace("/register");
//     }
//   }, [session, router]);

//   return (
//     <div>
//       <div>
//         <Image
//           src={session?.user?.image}
//           width={100}
//           height={100}
//           className="rounded-full"
//           alt="user image"
//         />
//         <h2>
//           Name : <b>{session?.user?.name}</b>
//         </h2>
//         <h3>
//           Email : <b>{session?.user?.email}</b>
//         </h3>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import pro from "@/public/images/62.jpg";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function Profile() {
  return (
    <div className="font-sans antialiased">
      <div className="grid grid-cols-4 h-40 bg-gradient-to-b from-slate-200 to-white pt-7">
        <div className="mt-5 col-span-1 pl-20">
          <Image
            src={pro}
            height={100}
            width={100}
            className="rounded-full border-solid border-4 border-white"
            alt="Profile photo"
          />
        </div>
        <div className="mt-5 col-span-3 text-lg pl-10">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
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
            <div className="col-span-1">
              <h3>Emergency Number : 0123456789</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 mt-10 grid grid-cols-3 gap-4 ">
        <div className="col-span-1">
          <h2 className="flex justify-center text-xl">Health Information</h2>
          <div className="mt-5">
            <Table aria-label="Example dynamic collection table">
              <TableHeader>
                <TableColumn>Allergies</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Tony Reichert</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Zoey Lang</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Jane Fisher</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>William Howard</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="mt-5">
            <Table aria-label="Example dynamic collection table">
              <TableHeader>
                <TableColumn>Current Medications</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Tony Reichert</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Zoey Lang</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Jane Fisher</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>William Howard</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="mt-5">
            <Table aria-label="Example dynamic collection table">
              <TableHeader>
                <TableColumn>Chronic Conditions</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Tony Reichert</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Zoey Lang</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Jane Fisher</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>William Howard</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="col-span-2  bg-red-500 min-h-64 rounded-lg shadow-md"></div>
      </div>
    </div>
  );
}
