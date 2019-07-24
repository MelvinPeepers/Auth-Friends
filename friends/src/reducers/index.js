/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_FRIEND,
  FETCHING_FRIEND_SUCCESS,
  FETCHING_FRIEND_FAILED,
  ADD_FRIEND,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from "../actions";

//  Your initial/default state for this project could *Although does not have to* look a lot like this
// my instial state
const initialState = {
  friends: [],
  fetchingFriends: false,
  isLoading: false,
  errorMessage: null
};

// start of my reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.message
      };
    }
    case FETCHING_FRIEND: {
      return {
        ...state,
        fetchingFriends: true,
        errorMessage: null
      };
    }
    case FETCHING_FRIEND_SUCCESS: {
      return {
        ...state,
        fetchingFriends: false,
        errorMessage: "",
        friends: action.payload
      };
    }
    case FETCHING_FRIEND_FAILED: {
      return {
        fetchingFriends: false,
        friends: action.payload
      };
    }
    case ADD_FRIEND: {
      console.log("friend added");
      return {
        ...state,
        fetchingFriends: true,
        errorMessage: false
      };
    }
    case ADD_FRIEND_SUCCESS: {
      console.log("friend success");
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload,
        errorMessage: ""
      };
    }
    case ADD_FRIEND_FAILED: {
      console.log("friend failed");
      return {
        fetchingFriends: false,
        errorMessage: action.payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
