import {
    GET_ALL_SERVICES_REQUEST,
    GET_ALL_SERVICES_SUCCESS,
    GET_ALL_SERVICES_FAIL,
    CREATE_SERVICE_REQUEST,
    CREATE_SERVICE_SUCCESS,
    CREATE_SERVICE_FAIL,
    UPDATE_SERVICE_REQUEST,
    UPDATE_SERVICE_SUCCESS,
    UPDATE_SERVICE_FAIL,
    DELETE_SERVICE_REQUEST,
    DELETE_SERVICE_SUCCESS,
    DELETE_SERVICE_FAIL,
    GET_SERVICE_DETAILS_REQUEST,
    GET_SERVICE_DETAILS_SUCCESS,
    GET_SERVICE_DETAILS_FAIL,
  } from '../constants/serviceConstants';
  
  // Initial state
  const initialState = {
    services: [],
    service: {},
    loading: false,
    error: null,
    success: false // Assuming success flag for CRUD operations
  };
  
  // Service reducer
  export const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_SERVICES_REQUEST:
      case CREATE_SERVICE_REQUEST:
      case UPDATE_SERVICE_REQUEST:
      case DELETE_SERVICE_REQUEST:
      case GET_SERVICE_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case GET_ALL_SERVICES_SUCCESS:
        return {
          ...state,
          loading: false,
          services: action.payload,
        };
  
      case CREATE_SERVICE_SUCCESS:
      case UPDATE_SERVICE_SUCCESS:
      case DELETE_SERVICE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true, // Set success flag to true upon successful operation
        };
  
      case GET_SERVICE_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          service: action.payload,
        };
  
      case GET_ALL_SERVICES_FAIL:
      case CREATE_SERVICE_FAIL:
      case UPDATE_SERVICE_FAIL:
      case DELETE_SERVICE_FAIL:
      case GET_SERVICE_DETAILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
