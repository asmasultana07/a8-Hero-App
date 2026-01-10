import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet, useLocation, useNavigation } from "react-router"
import LoadingSpinner from "../components/LoadingSpinner"
import { useEffect } from "react"

const MainLayout = () => {
    const navigation = useNavigation()
    const location =useLocation();
    // console.log(navigation.state)
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    
    return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        {navigation?.state === 'loading' ? (
            <LoadingSpinner />
        ) : (
            <main className="max-w-screen w-full flex-1">
                <Outlet />
            </main>
        )}
        <Footer />
    </div>
    )
}

export default MainLayout