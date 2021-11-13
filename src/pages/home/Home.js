import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import "./Home.scss";
import Loader from "../../components/loader/Loader";

export default function Home() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const getPosts = async () => {
      try {
        const req = await fetch(
          "https://still-atoll-78147.herokuapp.com/api/posts"
        );
        if (req.status !== 200) {
        }
        const reqJson = await req.json();
        setPosts(reqJson.posts);
      } catch (err) {}
    };
    getPosts();
    const scrollToTop = async () => {
      await document.getElementById("container").scrollTo(0, 0);
    };

    scrollToTop();
  }, []);

  return (
    <div className="home-container">
      {posts ? (
        <>
          <div className="home-banner-container">
            <div className="home-banner-text">
              <div className="home-banner-title">&lt;Hello World! /&gt;</div>
              <div className="home-banner-text">
                My name is Kevin Figenshu, aka KFig21. Welcome to my blog!
              </div>
            </div>
          </div>
          <div className="posts-holder">
            <div className="posts-container">
              {posts &&
                posts.map((post) => {
                  return <Post key={post._id} post={post} />;
                })}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
