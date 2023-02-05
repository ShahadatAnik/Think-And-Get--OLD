import React from "react";

export default function Modal({ openModal, setOpenModal }) {
    return (
        <div
            className={`fixed z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden p-4  md:inset-0 md:h-full ${
                openModal ? "" : "hidden"
            } `}
        >
            <div className="relative h-full w-full max-w-2xl rounded-md md:h-auto">
                <div className="relative rounded-lg bg-white shadow">
                    <div
                        className="flex items-center justify-between rounded-t border-b p-4 
                             "
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
                        <h3 className="ml-2 text-xl font-semibold text-gray-900">
                            Filter by
                        </h3>
                        <button
                            type="button"
                            onClick={() => setOpenModal(!openModal)}
                            className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="space-y-6 p-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European
                            Union enacts new consumer privacy laws for its
                            citizens, companies around the world are updating
                            their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection
                            Regulation (G.D.P.R.) goes into effect on May 25 and
                            is meant to ensure a common set of data rights in
                            the European Union. It requires organizations to
                            notify users as soon as possible of high-risk data
                            breaches that could personally affect them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
