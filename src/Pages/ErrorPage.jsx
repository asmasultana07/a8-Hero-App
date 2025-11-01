import React from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import errorImage from '../assets/error-404.png'
import { Link } from "react-router"


const ErrorPage = () => {
    return (
        <>
        <Navbar />
        <section className="flex flex-col justify-center items-center p-20  lg:p-30">
            <img src={errorImage} alt="moveImage" className=" animate-moveImage "/>
            <h1 className=" text-#[001931] text-[48px] mt-6">
                Oops, page not found!
            </h1>
            <p className="text-[#627382] text-[20px]">The page you are looking for is not available.</p>
            <button className="mt-6 rounded-md text-white text-[16px]  btn 
                                bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-pink-500 hover:to-purple-500"> 
            <Link to="/"  > Back To Home </Link>
            </button>
        </section>
        <Footer />

        </>
    )
}

export default ErrorPage
