import React, { useState } from "react";
import axios from "axios";

function AxiosPatch() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [output, setOutput] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .patch("https://jsonplaceholder.typicode.com/posts/1", {
                title,
                body,
            })
            .then((response) => {
                setOutput(response.data);
            });
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Patch :</legend>

                    <label>Title : </label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <br></br>
                    <br></br>

                    <label>Body : </label>
                    <input
                        type="text"
                        value={body}
                        onChange={handleBodyChange}
                    />
                    <br></br>
                    <br></br>

                    <input type="submit" value="Patch Req"></input>
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
                <code>
                    {`axios
    .patch("https://jsonplaceholder.typicode.com/posts/1", {
        title,
        body,
    })
    .then((response) => {
        setOutput(response.data);
    });`}
                </code>
            </pre>
        </section>
    );
}

export default AxiosPatch;
