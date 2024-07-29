"use client";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ProfileDropDown() {
  const [state, setState] = useState(false);
  const profileRef = useRef<HTMLButtonElement>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const navigation = [
    { title: "Dashboard", path: "#" },
    { title: "Settings", path: "#" },
  ];

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await createClient().auth.getUser();
      setUser(data.user);
      setLoading(false);
    };
    getUser();
  }, []);

  // useEffect(() => {
  //   const handleDropDown = (e: MouseEvent) => {
  //     if (!profileRef.current) return;
  //     setState(!state);
  //     // if (!profileRef.current.contains(e.target)) setState(false);
  //   };
  //   document.addEventListener("click", handleDropDown);

  //   return () => {
  //     document.removeEventListener("click", handleDropDown);
  //   };
  // }, [state]);

  return (
    <div className="relative z-40 mt-5 pt-5 lg:mt-0 lg:block">
      {/* {user ? "logged in" : "not logged in"} */}
      {loading ? "loading..." : user ? "logged in" : "not logged in"}
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="h-10 w-10 rounded-full outline-none ring-2 ring-gray-200 ring-offset-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            width={40}
            height={40}
            className="h-full w-full rounded-full"
            alt="Profile"
          />
        </button>
        <div className="lg:hidden">
          <span className="block">Micheal John</span>
          <span className="block text-sm text-gray-500">john@gmail.com</span>
        </div>
      </div>
      <ul
        className={`right-0 top-12 mt-6 space-y-5 bg-white lg:absolute lg:mt-0 lg:w-52 lg:space-y-0 lg:rounded-md lg:border lg:text-sm lg:shadow-md ${state ? "" : "lg:hidden"}`}
      >
        {navigation.map(({ path, title }) => (
          <li key={title}>
            <Link
              className="block text-gray-600 lg:p-2.5 lg:hover:bg-gray-50"
              href={path}
            >
              {title}
            </Link>
          </li>
        ))}
        <li>
          <div className="block text-gray-600 lg:p-2.5 lg:hover:bg-gray-50">
            Log out
          </div>
        </li>
      </ul>
    </div>
  );
}
