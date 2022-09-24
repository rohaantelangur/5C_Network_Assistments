import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType";

const initialState = {
    Data: JSON.parse(localStorage.getItem("userData")) || [],
    isLoad: false,
    isError: false,
  }

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST: {
        return {
          ...state,
          isLoad: true,
          isError: false,
        };
      }
      case GET_DATA_SUCCESS: {
        localStorage.setItem("userData", JSON.stringify(payload))
        return {
          ...state,
          Data: payload,
          isLoad: false,
          isError: false,
        };
      }
      case GET_DATA_FAILURE: {
        return {
          ...state,
          isLoad: false,
          isError: false,
        };
      }
  
      default:
        return state;
  }
}
