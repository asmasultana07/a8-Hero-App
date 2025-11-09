import React, { useState } from "react";
import ShowApps from "../components/ShowApps";
import useApps from "../hooks/useApps";
import { FaSearch } from "react-icons/fa";
import errorAppImage from '../assets/App-Error.png'
import { Link } from "react-router";

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");
  // const [isSearching, setIsSearching] = useState(false);

  const term = search.trim().toLocaleLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className="bg-[#f3f3f3] p-10 md:p-20">
      <div className="text-center mb-6">
        <h1 className="text-bb font-bold text-4xl md:text-5xl">
          Our All Applications
        </h1>
        <p className="text-pp text-xl mt-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center">
        <h3>
          <span className="font-semibold text-bb text-lg md:text-xl">
            ({searchApps.length}) Apps Found
          </span>
        </h3>
        <label className="bg-white shadow flex items-center gap-2 p-2 rounded-sm">
          <FaSearch className="w-5 h-5  " />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            name="search"
            placeholder="Search App"
            className="text-start text-pp font-semibold flex-1 outline-none bg-transparent "
          />
        </label>
      </div>

      {/* apps cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4  mt-4">
        {searchApps.length > 0 
          ? (searchApps.map((app) => (
              <ShowApps key={app.id} app={app}></ShowApps>
            )))
          : (
            <div className="col-span-full">
              <div className="flex flex-col justify-center items-center gap-4">
              <img src={errorAppImage} alt="" />
              <h1 className="text-pp text-3xl md:text-5xl font-semibold mt-4">OPPS!! APP NOT FOUND</h1>
              <p className="text-pp text-center md:text-2xl">The App you are requesting is not found on our system.  Please try another apps</p>
              <button className="mt-6 rounded-md text-white text-[16px]  btn px-5
                                bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-pink-500 hover:to-purple-500"> 
            <Link to="/apps" onClick={() => setSearch("")} > See All Apps </Link>
            </button>
              </div>
            </div>
          )
          }
      </div>
    </div>
  );
};

export default Apps;
