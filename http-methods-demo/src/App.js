import React from "react";

import AxiosGet from "./components/AxiosGet";
import AxiosPost from "./components/AxiosPost";
import AxiosCatch from "./components/AxiosCatch";
import AxiosDelete from "./components/AxiosDelete";
import AxiosPatch from "./components/AxiosPatch";
import AxiosPut from "./components/AxiosPut";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <h1>- Axios -</h1>
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
