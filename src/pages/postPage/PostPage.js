import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loader from "../../components/loader/Loader";
import "./PostPage.scss";

export default function EditPost() {
  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const [currentComments, setCurrentComments] = useState();
  const { register, reset, handleSubmit } = useForm();

  let { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const postReq = await fetch(
          `https://still-atoll-78147.herokuapp.com/api/posts/${id}`
        );
        if (postReq.status !== 200) {
          return;
        }
        const postJson = await postReq.json();
        setPost(postJson.post);
      } catch (err) {}
    };
    getPost();

    const getComments = async () => {
      try {
        const commentsReq = await fetch(
          `https://still-atoll-78147.herokuapp.com/api/posts/${id}/comments`
        );
        if (commentsReq.status !== 200) {
          return;
        }
        const commentsJson = await commentsReq.json();
        setComments(commentsJson.comments);
        setCurrentComments(commentsJson.comments);
      } catch (err) {}
    };
    getComments();

    // scroll to top of page on load
    const scrollToTop = async () => {
      await document.getElementById("container").scrollTo(0, 0);
    };
    scrollToTop();
  }, []);

  const submitComment = async (data, e) => {
    setCurrentComments([...currentComments, data]);
    setComments([...comments, data]);
    const formData = JSON.stringify(data);
    try {
      const req = await fetch(
        `https://still-atoll-78147.herokuapp.com/api/posts/${id}/comments`,
        {
          method: "post",
          body: formData,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (req.status !== 200) {
        return;
      }
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="layout">
      {post ? (
        <>
          <div className="post-page-container">
            <div className="post-page-content">
              {/* Title */}
              <span className="post-page-title">{post.title}</span>

              {/* Author */}
              <span className="post-page-submitted">
                {post.submitted} by{" "}
                <span className="post-page-author">{post.author}</span>
              </span>

              {/* Body */}
              <span
                className="post-page-body"
                dangerouslySetInnerHTML={{ __html: post.sanitizedHtml }}
              ></span>
            </div>
          </div>
          <div className="comments-container">
            <span className="comments-header">Add a comment</span>
            <div className="add-comment-container">
              <form action="">
                <div className="comment-form-group">
                  <label htmlFor="user">Name:</label>
                  <input
                    type="text"
                    name="user"
                    {...register("user", { required: true })}
                  />
                </div>
                <div className="comment-form-group">
                  <label htmlFor="text">Comment:</label>
                  <textarea
                    {...register("text", { required: true })}
                    name="text"
                  ></textarea>
                </div>
                <button type="submit" onClick={handleSubmit(submitComment)}>
                  Submit comment
                </button>
              </form>
            </div>
            {comments ? (
              <span className="comments-header">
                Comments ({comments.length})
              </span>
            ) : (
              <span className="comments-header">Comments (0)</span>
            )}

            {comments &&
              comments.map((comment) => {
                return (
                  <div className="comment-container" key={comment._id}>
                    <span className="comment-name">{comment.user}</span>
                    <span className="comment-text">{comment.text}</span>
                    <span className="comment-date">
                      Submitted: {comment.submitted}
                    </span>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
