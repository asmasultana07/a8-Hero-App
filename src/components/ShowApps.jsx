import React from "react";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuStar } from "react-icons/lu";
import { Link } from "react-router";

const ShowApps = ({ app }) => {
    const { image, title, id, ratingAvg, downloads} = app;
  
  
    return (
    <Link to={`/app/${id}`}>
    <div className="card bg-base-100 shadow-sm rounded-xl p-4 hover:scale-105 transition ease-in-out">
      <figure className=" ">
        <img src={image} alt="image loading" className="bg-[#D9D9D9] rounded-xl h-50 w-full object-cover"/>
      </figure>
      <h3 className="text-bb text-lg font-semibold my-2">{title} </h3>
      <div className="flex justify-between items-center">
        <p className="bg-[#F1F5E8] text-[#00D390] px-2 py-1 rounded-md flex justify-center items-center gap-2"><LuArrowDownToLine /> {downloads}</p>
        <p className="bg-[#FFF0E1] text-[#FF8811] px-2 py-1 rounded-md flex justify-center items-center gap-2"><LuStar /> {ratingAvg}  </p>
      </div>
    </div>
    </Link>
  );
};

export default ShowApps;
