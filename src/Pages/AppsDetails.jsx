import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import { loadInstallData } from "../utils/localStorage";


const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  // console.log(apps)
  const [isInstall, setIsInstall] = useState(false);

  useEffect(() =>  {
    const loadData = loadInstallData();
    const ifInstalled = loadData.some(a => a.id === app.id);
    if(ifInstalled) 
      setIsInstall(true);
  }, []
  })

  if (loading) return <p>Loading........</p>;

  const app = apps.find((a) => a.id === Number(id));
  const { image, title, companyName, ratingAvg, downloads, description, size, reviews, ratings, } = app || {};

  return (
    <div className="p-10 md:p-20 bg-[#f3f3f3]">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 md:gap-6 r">
        <div>
          <img
            src={image}
            alt="loading"
            className="w-60 h-50 md:w-80 md:h-60 shadow-lg object-cover "
          />
        </div>
        <div className="md:col-span-3 mt-4 md:mt-1">
          <div className="">
            <h3 className="text-bb text-3xl md:text-4xl font-bold">{title}</h3>
            <p className="text-pp text-base md:text-xl mt-2">
              Developed by{" "}
              <span className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>
          <hr className="text-gray-300 my-4" />
          <div>
            <div className="flex gap-8 ">
              <div>
                <img src={downloadImg} alt="" className="w-6 h-6" />
                <p className="text-pp  my-2">Downloads</p>
                <p className="text-bb text-2xl font-extrabold">{downloads}</p>
              </div>
              <div>
                <img src={ratingImg} alt="" className="w-6 h-6" />
                <p className="text-pp  my-2">Average Ratings</p>
                <p className="text-bb text-2xl font-extrabold">{ratingAvg}</p>
              </div>
              <div>
                <img src={reviewImg} alt="" className="w-6 h-6" />
                <p className="text-pp  my-2">Total Reviews</p>
                <p className="text-bb text-2xl font-extrabold">{reviews}</p>
              </div>
            </div>
            <div>
              <button className="bg-[#00D390] text-white font-semibold px-6 py-2 rounded-sm mt-4">
                Install Now ({size}MB)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
