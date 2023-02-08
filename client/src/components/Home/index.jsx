export default function Index() {
    return (
        <div className="flex flex-col">
            <label class="w-xl relative mx-8 lg:mx-60 my-4 flex-auto rounded-md">
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
                    class="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none sm:text-sm"
                    placeholder="Search for anything..."
                    type="search"
                    name="search"
                />
            </label>
        </div>
    );
}