import { LoginForm } from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default async function Register({ Component, pageProps }) {
  const session = await getServerSession();
  if(session) {
    redirect("/");
  }
  return (
    <>
        <LoginForm/>
    </>
  );
}
