// import { LoginForm } from "@/components/LoginForm";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// // import {handler} from "@/app/api/auth/[...nextauth]/route";

// export default async function Home({ Component, pageProps }) {
//   const session = await getServerSession();
//   if(session) {
//     redirect("/secret");
//   }
//   return (
//     <>
//       {/* <Component {...pageProps} /> */}
//       <>
//         <LoginForm/>
//       </>
//     </>
//   );
// }

export default function Home() {
    return(
    <div>
        <p>Home</p>
    </div>
)}