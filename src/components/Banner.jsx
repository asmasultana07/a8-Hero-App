import React from "react";
import googlePlayStore from "../assets/google-play-icon.png";
import heroImage from "../assets/hero.png";

const Banner = () => {
  return (
    <section className="">
      {/* Banner */}
      <div className="bg-[#f3f3f3] flex flex-col gap-5 px-10 md:px-20">
        <div className="mt-10 flex flex-col justify-center items-center text-center gap-6">
          <h1 className="text-4xl md:text-7xl text-bb font-bold">
            We Build
            <span className="text-[#632EE3]">
              <br /> Productive 
            </span>
              Apps
          </h1>
          <p className="text-pp md:w-100 lg:w-200">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="mb-6 flex gap-4 justify-center items-center ">
          <a className="btn bg-white text-black border-[#632EE3] flex items-center gap-2"
             href="https://play.google.com/store/apps?hl=en_IN" target="_blank" >
            <img src={googlePlayStore} alt="" className="w-5 h-4" />
            <span>Google Play</span>
          </a> 
           
          {/* <!-- Microsoft --> */}
          <a className="btn bg-white text-black border-[#632EE3] flex items-center gap-2" 
            href="https://apps.microsoft.com/apps?hl=en-US&gl=US" target="_blank" >
            <svg
              aria-label="Microsoft logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M96 96H247V247H96" fill="#f24f23"></path>
              <path d="M265 96V247H416V96" fill="#7eba03"></path>
              <path d="M96 265H247V416H96" fill="#3ca4ef"></path>
              <path d="M265 265H416V416H265" fill="#f9ba00"></path>
            </svg>
            <span>Microsoft App Store</span>
          </a>
            
        </div>
        <div className="flex justify-center items-center">
          <img src={heroImage} alt="" />
        </div>
      </div>
      {/* Trusted section */}
      <div className="p-10 md:p-20 flex flex-col justify-center items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
        <h2 className="text-white text-xl md:text-3xl font-semibold">Trusted by Millions, Built for You</h2>
        
          <div class="md:stats shadow mt-10 gap-20">
            <div class="stat place-items-center gap-4">
              <div class="stat-title text-white text-[14px]">Total Downloads</div>
              <div class="stat-value text-white md:text-6xl">29.6M</div>
              <div class="stat-desc text-white">21% more than last month</div>
            </div>

            <div class="stat place-items-center gap-4">
              <div class="stat-title text-white text-[14px]">Total Reviews</div>
              <div class="stat-value text-secondary text-white md:text-6xl">906K</div>
              <div class="stat-desc text-secondary text-white">46% more than last month</div>
            </div>

            <div class="stat place-items-center gap-4">
              <div class="stat-title text-white text-[14px]">Active Apps</div>
              <div class="stat-value text-white md:text-6xl">132+</div>
              <div class="stat-desc text-white">31 more will Launch</div>
            </div>
          </div>
        
      </div>
     
    </section>
  );
};

export default Banner;
