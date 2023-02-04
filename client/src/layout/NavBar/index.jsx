import "./index.css";
import { useState } from "react";

export default function Index() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navList = [
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Contact",
            link: "/contact",
        },
        {
            name: "Blog",
            link: "/blog",
        },
    ];
    var hidden = "hidden";

    if (navbarOpen) {
        // animate open navbar
        hidden = "transition transform ease-in";
    } else {
        hidden = "hidden transform transition ease-out";
    }

    return (
        <nav className=" z-50 flex w-full flex-wrap items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2">
            <a
                href="/"
                className="mr-6 flex flex-shrink-0 items-center text-white"
            >
                <svg
                    className="mr-2 h-8 w-8 fill-current"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                </svg>
                <span className="text-xl font-semibold tracking-tight">
                    Think & Get
                </span>
            </a>
            <div className="block lg:hidden">
                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="flex items-center rounded-md border-2 border-white px-3 py-2 text-white transition duration-300 ease-in-out hover:border-white hover:text-white"
                >
                    <svg
                        className="h-3 w-3 animate-bounce fill-current transition duration-500 ease-in-out hover:text-white"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                className={`block w-full flex-grow lg:flex lg:w-auto lg:items-center ${hidden}`}
            >
                <div className="text-sm justify-center lg:flex-grow">
                    {/* {navList.map((item, index) => (
                        <a
                            href={item.link}
                            className={
                                item.link === window.location.pathname
                                    ? "mt-4 mr-4 block font-extrabold text-white hover:text-white lg:mt-0 lg:inline-block"
                                    : "mt-4 mr-4 block text-white hover:text-white lg:mt-0 lg:inline-block"
                            }
                        >
                            {item.name}
                        </a>
                    ))} */}
                    {navList.map((item, index) => (
                        <a
                            key={index}
                            className={
                                item.link === window.location.pathname
                                    ? "nav-link nav-link-ltr mt-4 border-collapse mr-4 block text-white hover:text-white lg:mt-0 lg:inline-block "
                                    : "nav-link nav-link-ltr mt-4 mr-4 block text-white hover:text-white lg:mt-0 lg:inline-block"
                            }
                            href={item.link}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div>
                    <a
                        href="/login"
                        className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white transition duration-500 ease-in-out hover:border-transparent hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-300 lg:mt-0"
                    >
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
}
