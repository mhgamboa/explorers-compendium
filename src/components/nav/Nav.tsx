"use client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Replace # path with your path
  const navigation = [
    { title: "My Encounters", path: "/encounter" },
    { title: "Careers", path: "#" },
    { title: "Guides", path: "#" },
    { title: "Partners", path: "#" },
  ];

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();

      setUser(data.user);
      // console.log(data);
      setLoading(false);
    };
    getUser();
  }, []);

  return (
    <nav className="w-full border-b bg-white md:static md:border-0">
      <div className="mx-auto max-w-screen-xl items-center px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <a href="#">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${showMenu ? "block" : "hidden"}`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={item.title}
                  className="text-gray-600 hover:text-indigo-600"
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {!loading && (
          <div className="hidden md:inline-block">
            <a
              href={user ? "/" : "/login"}
              onClick={async () => {
                if (!user) return;
                const supabase = createClient();

                await supabase.auth.signOut();
                // revalidatePath("/");
              }}
              className="rounded-md bg-indigo-600 px-4 py-3 text-white shadow hover:bg-indigo-700"
            >
              {user ? "Log Out" : "Get Started"}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
