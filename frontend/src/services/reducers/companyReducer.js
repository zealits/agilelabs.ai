import {
    GET_ALL_COMPANIES_REQUEST,
    GET_ALL_COMPANIES_SUCCESS,
    GET_ALL_COMPANIES_FAIL,
    CREATE_COMPANY_REQUEST,
    CREATE_COMPANY_SUCCESS,
    CREATE_COMPANY_FAIL,
    UPDATE_COMPANY_REQUEST,
    UPDATE_COMPANY_SUCCESS,
    UPDATE_COMPANY_FAIL,
    DELETE_COMPANY_REQUEST,
    DELETE_COMPANY_SUCCESS,
    DELETE_COMPANY_FAIL,
    GET_COMPANY_DETAILS_REQUEST,
    GET_COMPANY_DETAILS_SUCCESS,
    GET_COMPANY_DETAILS_FAIL,
  } from '../constants/companyConstants';
  
  // Initial state
  const initialState = {
    companies: [],
    company: {},
    loading: false,
    error: null,
  };
  
  // Company reducer
  export const companyReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_COMPANIES_REQUEST:
      case CREATE_COMPANY_REQUEST:
      case UPDATE_COMPANY_REQUEST:
      case DELETE_COMPANY_REQUEST:
      case GET_COMPANY_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case GET_ALL_COMPANIES_SUCCESS:
        return {
          ...state,
          loading: false,
          companies: action.payload,
        };
  
      case CREATE_COMPANY_SUCCESS:
      case UPDATE_COMPANY_SUCCESS:
      case DELETE_COMPANY_SUCCESS:
        return {
          ...state,
          loading: false,
          success: action.payload,
        };
  
      case GET_COMPANY_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          company: action.payload,
        };
  
      case GET_ALL_COMPANIES_FAIL:
      case CREATE_COMPANY_FAIL:
      case UPDATE_COMPANY_FAIL:
      case DELETE_COMPANY_FAIL:
      case GET_COMPANY_DETAILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  