import React, { useState, useEffect } from "react";
import axios from "axios";

function AxiosGet() {
    const [posts, setPosts] = useState([]);
    const [showPosts, setShowPosts] = useState(false);

    useEffect(() => {
        if (showPosts) {
            axios
                .get("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                    setPosts(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching posts:", error);
                });
        }
    }, [showPosts]);

    const deleteReq = (id) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                console.log(`${response.request.responseURL} Deleted.`);
                const updatedPosts = posts.filter((post) => post.id !== id);
                setPosts(updatedPosts);
            });
    };

    return (
        <section>
            <span>Delete : </span>
            <button onClick={() => setShowPosts(!showPosts)}>
                {showPosts ? "Hide Posts" : "Get Posts"}
            </button>
            {showPosts && (
                <article>
                    {posts.map((post) =>
                        post.id <= 30 ? (
                            <div key={post.id}>
                                <h3>
                                    {post.id}. {post.title}
                                </h3>
                                <p>{post.body}</p>
                                <button onClick={() => deleteReq(post.id)}>
                                    Delete
                                </button>
                                {post.id < 30 && <hr />}
                            </div>
                        ) : null
                    )}
                </article>
            )}
            {showPosts ? "" : <br />}
            <pre>
                <code>
                    {`axios
    .delete("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((response) => {
        console.log(response.request.responseURL + "Deleted.");
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
    });`}
                </code>
            </pre>
        </section>
    );
}

export default AxiosGet;
