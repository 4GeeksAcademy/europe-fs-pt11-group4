import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { ProductDisplay } from "./pages/checkout";
import { Success } from "./pages/success";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { FrequentlyAskedQuestions } from "./pages/frequentlyAskedQuestions";
import { Contact } from "./pages/contact";
import { AboutUs } from "./pages/aboutUs";

import { SignUp } from "./pages/signup";
import { Booking } from "./pages/booking";
import { Login } from "./pages/login";
import { Private } from "./pages/private";
import { Report } from "./pages/report";
import { Forgot } from "./pages/forgot";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<SignUp />} path="/signup" />
                        <Route element={<Booking />} path="/booking" />
                        <Route element={<Forgot />} path="/forgot" />
                        <Route element={<Private />} path="/private" />
                        <Route element={<FrequentlyAskedQuestions />} path="/frequentlyAskedQuestions" />
                        <Route element={<Report />} path="/report" />
                        <Route element={<Contact />} path="/contact" />
                        <Route element={<AboutUs />} path="/aboutUs" />
                        <Route element={<ProductDisplay />} path="/checkout" />
                        <Route element={<Success />} path="/success" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
