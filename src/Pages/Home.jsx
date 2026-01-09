import React from "react"
import Banner from "../components/Banner"
import TrendingApps from "../components/TrendingApps"
import LoadingSpinner from "../components/LoadingSpinner";
import useApps from "../hooks/useApps";

const Home = () => {
    const { apps, loading } = useApps();
    if (loading) return (  <LoadingSpinner />);
    
    return (
    <section>
        <Banner />
        <TrendingApps />
        
    </section>
    )
}

export default Home;
