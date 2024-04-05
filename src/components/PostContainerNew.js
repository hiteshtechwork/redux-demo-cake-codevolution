import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./redux";
import { useEffect } from "react";

const PostContainerNew = () => {
  const postData = useSelector((state) => state.post);
  const dispatch = useDispatch(() => fetchPost());

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return postData.loading ? (
    <h2>Loading ... </h2>
  ) : postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div>
      <h2>Posts List</h2>
      {console.log(postData.posts)}
      <div>
        {/* {console.log(postData)} */}
        {postData &&
          postData.posts &&
          postData.posts.map((element, index) => (
            <p key={index}>
              {element.id} {element.title}{" "}
            </p>
          ))}
      </div>
    </div>
  );
};

export default PostContainerNew;
