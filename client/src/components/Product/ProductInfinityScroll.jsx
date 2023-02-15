import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ProductInfinityScroll({ products }) {
    return (
        <InfiniteScroll
            dataLength={products.length}
            next={() => console.log("next")}
            hasMore={false}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p className="text-red-500">
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <div className="rounded-xl bg-white shadow-md duration-500 hover:scale-[1.02] hover:shadow-xl">
                        <a href="#" className="relative">
                            <img
                                src={product.image}
                                alt="Product image"
                                className=" w-full rounded-t-xl object-cover object-center hover:rounded-t-xl"
                            />
                            <div className="absolute bottom-2 left-3 right-0 flex flex-row items-center space-x-1">
                                <svg
                                    className="w-6 fill-yellow-400 text-white"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M21.5,9.757l-5.278,4.354L17.871,21.5,12,17.278,6.129,21.5l1.649-7.389L2.5,9.757l6.333-.924L12,2.5l3.167,6.333Z" />
                                </svg>
                                <span className="text-2xl font-bold text-white">
                                    {product.ratting}
                                </span>

                                <span className="text-sm font-bold text-white">
                                    ( 1,000 )
                                </span>
                            </div>
                        </a>

                        <div className="px-4 py-3">
                            <span className="mr-3 text-xs uppercase text-gray-400">
                                {product.shop}
                            </span>
                            <p className="block truncate text-lg font-bold capitalize text-black">
                                {product.name}
                            </p>
                            <div className="flex items-center">
                                {product.discountPrice ? (
                                    <>
                                        <p className="my-3 cursor-auto text-lg font-semibold text-black">
                                            <span className="text-xl font-bold">
                                                ৳
                                            </span>
                                            {product.discountPrice}
                                        </p>
                                        <del>
                                            <p className="ml-2 cursor-auto text-sm text-gray-600">
                                                <span className="font-bold">
                                                    ৳
                                                </span>
                                                {product.actualPrice}
                                            </p>
                                        </del>
                                    </>
                                ) : (
                                    <p className="my-3 cursor-auto text-lg font-semibold text-black">
                                        <span className="text-xl font-bold">
                                            ৳
                                        </span>
                                        {product.actualPrice}
                                    </p>
                                )}
                                <div className="ml-auto">
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                            />
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </InfiniteScroll>
    );
}
