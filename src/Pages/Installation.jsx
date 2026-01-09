import React, {  useState } from "react"
import useApps from "../hooks/useApps";
import { loadInstallData, uninstallData } from "../utils/localStorage";
import LoadingSpinner from "../components/LoadingSpinner";
import InstallApps from "../components/InstallApps";

const Installation = () => {
    const [installList, setInstallList] = useState(loadInstallData);
    const [sortOrder, setSortOrder] = useState('none');

    const { apps, loading } = useApps();
    if (loading) return (  <LoadingSpinner />);    

    const sortedApps = () => {
        let sortedData = [...installList];
        if (sortOrder === "High-Low") return sortedData.sort((a, b) => b.downloads - a.downloads);
        if (sortOrder === "Low-High") return sortedData.sort((a, b) => a.downloads - b.downloads);
        return sortedData;
    };

    // const handleUninstallBtn = (id) => {
    //     uninstallData(id)
    //     const updatedData = loadInstallData();
    //     setInstallList(updatedData);
    // }


    return (
        <div className="bg-[#f3f3f3] p-10 md:p-20">
                <div>

                    <div className="text-center mb-6">
                        <h1 className="text-bb font-semibold text-3xl md:text-5xl">
                            Your Installed Apps
                        </h1>
                        <p className="text-pp text-xl mt-5">
                            Explore All Installed Apps on your device
                        </p>
                    </div>
                    <div className="mb-2 flex justify-between items-center">
                        <h3>
                            <span className="font-medium text-bb text-lg md:text-xl">
                                ({sortedApps.length}) Apps Installed
                            </span>
                        </h3>
                    
                        <select value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="select select-bordered">
                            <option value="none" >Sort by Downloads</option>
                            <option value="High-Low"> High-Low</option>
                            <option value="Low-High"> Low-High</option>
                        </select>
                    </div>
                    <hr />

                    {/* // installed apps list  */}
                    <div>
                        {sortedApps().map((app) => (
                            <InstallApps key={app.id} app={app}></InstallApps>

                        ))}
                    </div>

                </div>
            
        </div>
    )
}

export default Installation;
