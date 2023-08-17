import React, { useEffect, useState } from "react";

import AxiosGet from "./components/AxiosGet";
import AxiosPost from "./components/AxiosPost";
import AxiosCatch from "./components/AxiosCatch";
import AxiosDelete from "./components/AxiosDelete";
import AxiosPatch from "./components/AxiosPatch";
import AxiosPut from "./components/AxiosPut";
import Footer from "./components/Footer";

const App = () => {
    const [hedder, setHedder] = useState("HTTP Methods Demo");

    useEffect(() => {
        document.title = hedder;
    }, [hedder]);

    const handleMouseEnter = () => {
        setHedder("Axios Methods Demo");
    };

    const handleMouseLeave = () => {
        setHedder("HTTP Methods Demo");
    };

    return (
        <div>
            <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                - {hedder} -
            </h1>
            <AxiosGet />
            <AxiosPost />
            <AxiosDelete />
            <AxiosCatch />
            <AxiosPatch />
            <AxiosPut />
            <Footer />
        </div>
    );
};

export default App;
