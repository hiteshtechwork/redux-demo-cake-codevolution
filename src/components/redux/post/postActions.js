import { FETCH_POST_REQUEST } from "./postTypes";
import { FETCH_POST_SUCCESS } from "./postTypes";
import { FETCH_POST_FAILURE } from "./postTypes";
import axios from "axios";

export const fetchPostRequest = () => {
  return {
    tpye: FETCH_POST_REQUEST,
  };
};

export const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts,
  };
};

export const fetchPostFailue = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

export const fetchPost = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostSuccess(posts));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPostFailue(errorMsg));
      });
  };
};
