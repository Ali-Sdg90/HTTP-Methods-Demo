import React, { useState } from "react";
import axios from "axios";

function AxiosPost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [savePost, setSavePost] = useState([]);
    const [showPost, setShowPost] = useState(false);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        if (name === "title") {
            setTitle(value);
        } else if (name === "body") {
            setBody(value);
        }
    };

    const postReq = (event) => {
        event.preventDefault();

        if (showPost) {
            setShowPost(false);
        } else {
            axios
                .post("https://jsonplaceholder.typicode.com/posts", {
                    title: title,
                    body: body,
                })
                .then((response) => {
                    setSavePost(response.data);
                    setShowPost(true);
                })
                .catch((error) => {
                    console.error("Error posting data:", error);
                });
        }
    };

    return (
        <section>
            <form>
                <fieldset>
                    <legend>Post :</legend>
                    <label>Title : </label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={changeHandler}
                        required
                    ></input>
                    <br></br>
                    <br></br>
                    <label>Body : </label>
                    <input
                        type="text"
                        name="body"
                        value={body}
                        onChange={changeHandler}
                        required
                    ></input>
                    <br></br>
                    <br></br>
                    <input
                        type="submit"
                        onClick={postReq}
                        value={showPost ? "Hide Post" : "Post Req"}
                    ></input>
                </fieldset>
            </form>
            {showPost && (
                <article>
                    <h3>1. {savePost.title}</h3>
                    <p>{savePost.body}</p>
                    <p>Status : {savePost.id}</p>
                </article>
            )}
            <pre>
                <code>
                    {`axios
    .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
    })
    .then((response) => {
        setSavePost(response.data);
    })
    .catch((error) => {
        console.error(error);
    });`}
                </code>
            </pre>
        </section>
    );
}

export default AxiosPost;
