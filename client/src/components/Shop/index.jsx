import React from "react";
import Modal from "./Modal";
import Modal2 from "./Modal2";

export default function Index() {
    const [openModal, setOpenModal] = React.useState(false);

    return (
        <div className="flex-col">
            <div
                className={`flex flex-row items-center transition-all duration-500 ease-in-out ${
                    openModal ? "blur-sm" : ""
                }`}
            >
                <label className="w-xl  relative mx-8 my-4 flex-1 rounded-md lg:mx-60">
                    <button
                        onClick={() => setOpenModal(!openModal)}
                        className="absolute inset-y-0 left-0 flex items-center pl-2 "
                    >
                        <svg
                            fill="bg-black"
                            viewBox="0 0 512 512"
                            className="h-5 w-5 text-black"
                        >
                            <title>Filter</title>
                            <path
                                fill="bg-black"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="32"
                                d="M32 144h448M112 256h288M208 368h96"
                            />
                        </svg>
                    </button>
                    <input
                        className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none sm:text-sm"
                        placeholder="Search for anything..."
                        type="search"
                        name="search"
                    />
                </label>
            </div>
            {/* <React.Suspense fallback={<div>Loading...</div>}>
                <Modal openModal={openModal} setOpenModal={setOpenModal} />
            </React.Suspense> */}

            <React.Suspense fallback={<div>Loading...</div>}>
                <Modal2 openModal={openModal} setOpenModal={setOpenModal} />
            </React.Suspense>
        </div>
    );
}
