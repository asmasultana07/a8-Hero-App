import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet, useNavigation } from "react-router"
import LoadingSpinner from "../components/LoadingSpinner"

const MainLayout = () => {
    const navigation = useNavigation()
    console.log(navigation.state)
    
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