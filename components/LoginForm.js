"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
export function LoginForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [newUser, setNewUser] = useState(false);

  const router = useRouter();

  function handleNewUser(e) {
    setNewUser(!newUser);
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (newUser) {
      if (!name || !email || !password) {
        seterror("All fields are necessary");
        return;
      }
      try {
        const resUserExists = await fetch("api/userExists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const { user } = await resUserExists.json();
        if (user) {
          seterror("User already exists.");
          return;
        }

        const res = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        });

        if (res.ok) {
          const form = e.target;
          form.reset();
          setNewUser(false);
          router.replace("/register");
        } else {
          console.log("User registration failed.");
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    } else {
      try {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        if (res.error) {
          seterror("Invalid Credentials");
          return;
        }
        // form.reset();
        router.replace("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="p-5">
      <form
        className="w-96 mx-auto pl-8 pr-8 pb-8 rounded-lg shadow-md"
        onSubmit={handlesubmit}
      >
        {/* <h1 className="text-xl font-sans font-bold mb-6 text-center">{newUser ? "Sign Up" : "Sign In"}</h1> */}
        <Image
          className="mx-auto mb-6 mt-2"
          src={logo}
          width={100}
          height={100}
          alt="Company logo"
        />
        {newUser && (
          <div className="mb-3">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setname(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
            {/* {errorName && <p className="error">{errorName}</p>} */}
          </div>
        )}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
          {/* {errorEmail && <p className="error">{errorEmail}</p>} */}
        </div>
        <div className="mt-3 mb-2">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
          {/* {errorPassword && <p className="error">{errorPassword}</p>} */}
        </div>
        <button onClick={() => handleNewUser()}>
          <p className="text-sm mb-2">
            {newUser ? "Already have an account" : "New-User? Click here"}
          </p>
        </button>

        {error && (
          <p className="bg-red-500 text-white antialiased font-sans text-base font-medium w-full rounded-md py-1 px-3 mt-3">
            {error}
          </p>
        )}
        <div className="flex mb-5 justify-between">
          <div>
            <button
              type="submit"
              className="w-32 h-10 grid items-center bg-blue-500 text-white rounded-lg text-md hover:bg-blue-400 mt-4"
            >
              {newUser ? "Sign Up" : "Sign In"}
            </button>
          </div>
          <div>
            <Dropdown>
              <DropdownTrigger>
                <button className="w-32 h-10 grid items-center bg-blue-500 text-white rounded-lg text-md hover:bg-blue-400 mt-4">
                  Select User
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">User</DropdownItem>
                <DropdownItem key="copy">Doctor</DropdownItem>
                <DropdownItem key="edit">Admin</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        {!newUser && (
          <div className="">
            <button
              onClick={() => signIn("google")}
              className="flex items-center rounded-lg w-full h-10 mt-2"
            >
              <Image
                src="/images/google-logo.png"
                className="p-1 h-10 w-12 mr-2 bg-white"
                height={35}
                width={35}
                alt="google logo"
              />
              <span className="w-full bg-blue-500 h-10 rounded-r-lg text-md text-white grid items-center">
                Sign in with Google
              </span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
