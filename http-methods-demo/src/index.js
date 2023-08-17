import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import axios from "axios";

axios.interceptors.request.use(
    (request) => {
        console.log(
            `A %c${request.method}%c request sent to ${request.url}`,
            "color: red;",
            "color: initial;"
        );
        return request;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        console.log(
            `A %cresponse%c has been received from ${response.config.url}`,
            "color: blue;",
            "color: initial;"
        );
        return response;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
