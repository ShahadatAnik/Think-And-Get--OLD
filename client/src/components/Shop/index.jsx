import { useState } from "react";
import Logo from "../../assets/img/logo.svg";

export default function Index() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3">
            <div className="w-full lg:flex lg:max-w-full">
                <div
                    className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
                    style={{
                        backgroundImage: `url(${Logo})`,
                    }}
                    title="Mountain"
                ></div>
                <div className="flex flex-col justify-between rounded-b border-r border-b border-l border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
                    <div className="mb-8">
                        <p className="flex items-center text-sm text-gray-600">
                            <svg
                                className="mr-2 h-3 w-3 fill-current text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                            </svg>
                            Members only
                        </p>
                        <div className="mb-2 text-xl font-bold text-gray-900">
                            Best Mountain Trails 2020
                        </div>
                        <p className="text-base text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, Nonea! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
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
                                John Smith
                            </p>
                            <p className="text-gray-600">Aug 18</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:flex lg:max-w-full">
                <div
                    className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
                    style={{
                        backgroundImage: `url(${Logo})`,
                    }}
                    title="River"
                ></div>
                <div className="flex flex-col justify-between rounded-b border-r border-b border-l border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
                    <div className="mb-8">
                        <div className="mb-2 text-xl font-bold text-gray-900">
                            15 Rivers In Norway
                        </div>
                        <p className="text-base text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, Nonea! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
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
                                Karen Johnson
                            </p>
                            <p className="text-gray-600">Aug 10</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:flex lg:max-w-full">
                <div
                    className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
                    style={{
                        backgroundImage: `url(${Logo})`,
                    }}
                    title="Forest"
                ></div>
                <div className="flex flex-col justify-between rounded-b border-r border-b border-l border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
                    <div className="mb-8">
                        <p className="flex items-center text-sm text-gray-600">
                            <svg
                                className="mr-2 h-3 w-3 fill-current text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                            </svg>
                            Members only
                        </p>
                        <div className="mb-2 text-xl font-bold text-gray-900">
                            5 National Forests across the U.S.
                        </div>
                        <p className="text-base text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, Nonea! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
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
                                Rafael Martin
                            </p>
                            <p className="text-gray-600">Aug 9</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
