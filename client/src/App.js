import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./utils/Loader";

import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

import ShopCard from "./components/Shop/ShopCard";

const Home = lazy(() => import("./components/Home"));
const Shop = lazy(() => import("./components/Shop"));
const Product = lazy(() => import("./components/Product"));
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
                    <Route
                        path="/shop"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Shop />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/product"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Product />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/test"
                        element={
                            <Suspense fallback={<Loader />}>
                                <ShopCard />
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
