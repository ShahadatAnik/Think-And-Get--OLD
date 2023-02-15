
export default function Login() {
    return (
        <div>
        <div class="rounded-lg shadow-lg bg-white w-full max-w-lg mx-auto p-8 md:p-12 my-10">
            <h2 class="text-2xl font-bold text-center mb-8">Login</h2>
            <form>
                
                <div class="mb-6">
                    <input
                        type="text"
                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="emailAddress"
                        placeholder="Email address"
                    />
                </div>
                <div class="mb-6">
                    <input
                        type="password"
                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div class="text-center lg:text-left">
                    <button
                        type="button"
                        class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Login
                    </button>
                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                        Don't have an account? 
                        <a
                            href="/signup"
                            class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                        >
                            Signup
                        </a>
                    </p>
                </div>
            </form>
        </div>
    </div>
      );
  }