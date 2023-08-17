import React, { useState } from "react";
import axios from "axios";

function AxiosPut() {
    const [title, setTitle] = useState("");
    const [output, setOutput] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .put("https://jsonplaceholder.typicode.com/posts/1", {
                title,
            })
            .then((response) => {
                setOutput(response.data);
            });
    };

    return (
        <section>
            <br />
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>PUT :</legend>
                    <br />
                    <label>Title : </label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <br />
                    <br />

                    <input type="submit" value="PUT Req" />
                </fieldset>
            </form>
            {output && (
                <article>
                    <h3>
                        {output.id}. {output.title}
                    </h3>
                    <p>{output.body}</p>
                </article>
            )}
            <pre>
                <code>{`axios
    .put("https://jsonplaceholder.typicode.com/posts/1", {
        title,
    })
    .then((response) => {
        setOutput(response.data);
    });`}</code>
            </pre>
        </section>
    );
}

export default AxiosPut;
