import React, { useState } from "react";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuStar } from "react-icons/lu";
import { loadInstallData, uninstallData } from "../utils/localStorage"; 
import { toast } from "react-toastify";

const InstallApps = ({ app }) => {
    const { image, title, id, ratingAvg, size, downloads} = app;
    const [installList, setInstallList] = useState(loadInstallData);

    const handleRemove = (id) => {
      uninstallData(id)
      const updatedData = loadInstallData();
      setInstallList(updatedData)
      toast.success(` ${title} has been uninstalled.. `)
    }
  
  
    return (
    // <Link to={`/apps/${id}`}>
    <div className="card flex flex-row justify-between items-end bg-white rounded-xl shadow-md p-4 mt-2" >
                              <div className="sm:flex gap-4">
                                <figure className=" ">
                                    <img src={image} alt="image loading" className="bg-[#D9D9D9] rounded-xl shadow-lg h-20 sm:h-30 w-40 object-cover"/>
                                </figure>
                                <div className="card-body p-2">
                                    <h3 className="text-bb text-lg font-semibold ">{title} </h3>
                                    <div className="flex gap-3 justify-between items-center">
                                            <p className="bg-[#F1F5E8] text-[#00D390] px-2 py-1 rounded-md flex justify-center items-center gap-2"><LuArrowDownToLine /> {downloads}</p>
                                            <p className="bg-[#FFF0E1] text-[#FF8811] px-2 py-1 rounded-md flex justify-center items-center gap-2"><LuStar /> {ratingAvg}  </p>
                                            <p className="bg-[#FFF0E1] text-[#FF8811] px-2 py-1 rounded-md flex justify-center items-center gap-2"> {size}MB </p>
                                    </div>
                                </div>
                              </div>
                                <button onClick={() => handleRemove(id)}
                                  className="bg-red-500 text-white font-semibold btn text-xl rounded-md p-4 mb-2 sm:mb-0">
                                    Uninstall
                                </button>
                            </div>
    // </Link>
  );
};

export default InstallApps;
