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
import Profilepage from "@/components/Profilepage";
export default function Profile() {
  return (
    <div>
      <Profilepage />
    </div>
  );
}
