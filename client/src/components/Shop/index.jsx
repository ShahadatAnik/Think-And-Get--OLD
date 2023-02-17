import Logo from "../../assets/img/logo.svg";
import { Menu, Transition } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";

const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: true },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Index() {
    return (
        <div className="flex w-full flex-col">
            <div className="flex w-full flex-row items-center justify-center p-4">
                <label className="w-xl relative my-2 mr-2 flex-1 rounded-md lg:mr-8">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg
                            fill="bg-pink-500"
                            viewBox="0 0 512 512"
                            className="h-5 w-5 text-pink-100"
                        >
                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                        </svg>
                    </span>
                    <input
                        className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none sm:text-sm"
                        placeholder="Search for anything..."
                        type="search"
                        name="search"
                    />
                </label>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                            Sort
                            <ChevronDownIcon
                                className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {sortOptions.map((option) => (
                                    <Menu.Item key={option.name}>
                                        {({ active }) => (
                                            <a
                                                href={option.href}
                                                className={classNames(
                                                    option.current
                                                        ? "font-medium text-gray-900"
                                                        : "text-gray-500",
                                                    active ? "bg-gray-100" : "",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                {option.name}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <div className="grid gap-x-8 gap-y-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {Array(10)
                    .fill()
                    .map((_, i) => (
                        <div className="w-full rounded-md shadow-md duration-500 hover:scale-[1.02] hover:shadow-xl lg:flex lg:max-w-full">
                            <div
                                className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
                                style={{
                                    backgroundImage: `url(${Logo})`,
                                }}
                                title="Mountain"
                            ></div>
                            <div className="flex flex-col justify-between rounded-b border-2 border-r border-b border-l border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
                                <div className="mb-8">
                                    <p className="flex items-center text-sm text-gray-600">
                                        <svg
                                            className="mr-2 h-3 w-3 fill-current text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                        </svg>
                                        Aftab Nagar, Dhaka
                                    </p>
                                    <div className="mb-2 text-xl font-bold text-gray-900">
                                        Mayer Doa Enterprise Ltd.
                                    </div>
                                    <p className="text-base text-gray-700">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aliquam at ipsum eu
                                        nunc commodo posuere et sit amet ligula.
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        className="mr-4 h-10 w-10 rounded-full"
                                        src={Logo}
                                        alt="Avatar of Writer"
                                    />
                                    <div className="text-sm">
                                        <p className="leading-none text-gray-900">
                                            Shahadat Anik
                                        </p>
                                        <p className="text-gray-600">Aug 18</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
