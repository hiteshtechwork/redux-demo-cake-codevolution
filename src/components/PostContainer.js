import React, { useEffect } from "react";
import { fetchPost } from "./redux";
import { connect } from "react-redux";

const PostContainer = ({ postData, fetchPost }) => {
  useEffect(() => {
    fetchPost();
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
          postData.posts.map((element) => (
            <p>
              {element.id} {element.title}{" "}
            </p>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postData: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: () => dispatch(fetchPost()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
