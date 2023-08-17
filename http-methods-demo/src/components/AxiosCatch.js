import React, { useState } from "react";
import axios from "axios";

function AxiosCatch() {
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const errorReq = (errorText) => {
        axios("https://jsonplaceholder.typicode..com/posts")
            .then((response) => console.log(response.data))
            .catch((error) => {
                setIsError(true);
                setErrorMessage(errorText + error.message);
                console.log(error);
            });
    };

    return (
        <section>
            <span>Catch : </span>
            <button onClick={() => errorReq("=> Error: ")}>Axios Catch</button>
            {isError && <article>{errorMessage}</article>}
            <pre>
                <code>
                    {`axios("https://jsonplaceholder.typicode..com/posts")
    .then((response) => console.log(response.data))
    .catch((error) => {
        setErrorMessage(errorText + error.message);
        console.log(error);
    });`}
                </code>
            </pre>
        </section>
    );
}

export default AxiosCatch;
