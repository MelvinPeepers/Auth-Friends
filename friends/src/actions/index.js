import axios from "axios";

/* 
  Action Types Go Here!
*/

export const FETCHING_FRIEND = "FETCHING_FRIEND";
export const FETCHING_FRIEND_SUCCESS = "FETCHING_FRIEND_SUCCESS";
export const FETCHING_FRIEND_FAILED = "FETCHING_FRIEND_FAILED";

export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILED = "ADD_FRIEND_FAILED";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export function fetchFriend() {
  return dispatch => {
    dispatch({ type: FETCHING_FRIEND });

    const headers = {
      Authorization: localStorage.getItem("token")
    };
    axios
      .get("http://localhost:5000/api/friends", { headers })
      .then(response => {
        dispatch({ type: FETCHING_FRIEND_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCHING_FRIEND_FAILED, payload: error.response });
      });
  };
}

// add friend
export function addNew(newText) {
  return dispatch => {
    dispatch({ type: ADD_FRIEND });

    const headers = {
      Authorization: localStorage.getItem("token")
    };

    axios
      .post("http://localhost:5000/api/friends", newText, { headers })
      .then(response => {
        console.log("Hello");
        dispatch({ type: ADD_FRIEND_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ADD_FRIEND_FAILED, payload: error.response });
      });
  };
}

// login
export function login(username, password) {
  return dispatch => {
    dispatch({ type: LOGIN_START });

    return axios
      .post("http://localhost:5000/api/login", { username, password })
      .then(response => {
        localStorage.setItem("token", response.data.payload);
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(error => {
        const payload = error.response ? error.response.data : error;
        dispatch({ type: LOGIN_FAILED, payload });
      });
  };
}
