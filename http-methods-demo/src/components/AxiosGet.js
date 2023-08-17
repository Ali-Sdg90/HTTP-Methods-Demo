import React, { useState } from "react";
import axios from "axios";

function AxiosGet() {
    const [posts, setPosts] = useState([]);
    const [showPosts, setShowPosts] = useState(false);

    const getReq = () => {
        if (showPosts) {
            setShowPosts(false);
        } else {
            axios("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                    setPosts(response.data);
                    setShowPosts(true);
                })
                .catch((error) => {
                    console.error("Error fetching posts:", error);
                });
        }
    };

    return (
        <section>
            <span>Get : </span>
            <button onClick={getReq}>
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
                                {post.id < 30 && <hr />}
                            </div>
                        ) : null
                    )}
                </article>
            )}
            <pre>
                <code>
                    {`axios("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        setPosts(response.data);
    })
    .catch((error) => {
        console.error(error);
    });`}
                </code>
            </pre>
        </section>
    );
}

export default AxiosGet;
