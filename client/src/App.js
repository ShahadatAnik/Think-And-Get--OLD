import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./utils/Loader";

import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

const Home = lazy(() => import("./components/Home"));
const NotFound = lazy(() => import("./layout/NotFound"));

function App() {
    return (
        <div>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/*"
                        element={
                            <Suspense fallback={<Loader />}>
                                <NotFound />
                            </Suspense>
                        }
                    />
                    // test route
                    <Route
                        path="/test"
                        element={
                            <Suspense fallback={<Loader />}>
                                <NavBar />
                            </Suspense>
                        }
                    />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
