import React from "react"
import { PropagateLoader } from "react-spinners"

const LoadingSpinner = () => {
    return (
    <div className="flex justify-center items-center h-[calc(100vh-285px)]">
        <PropagateLoader color={'purple'} />
    </div>
    )
}

export default LoadingSpinner
