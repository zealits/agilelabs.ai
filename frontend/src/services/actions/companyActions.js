import axios from "axios";
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
} from "../constants/companyConstants";

// Get all companies
export const getAllCompanies =
  (keyword = "", currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_COMPANIES_REQUEST });
      console.log("aniket");
      // const { data } = await axios.get("/aak/l1/companies");

      let link = `/aak/l1/companies?keyword=${keyword}&page=${currentPage}`;
      const { data } = await axios.get(link);

      dispatch({
        type: GET_ALL_COMPANIES_SUCCESS,
        payload: data.companies,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_COMPANIES_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Create new company
export const createCompany = (companyData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_COMPANY_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/company/new", companyData, config);

    dispatch({
      type: CREATE_COMPANY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_COMPANY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update company
export const updateCompany = (id, companyData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_COMPANY_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(`/api/v1/company/${id}`, companyData, config);

    dispatch({
      type: UPDATE_COMPANY_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_COMPANY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete company
export const deleteCompany = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_COMPANY_REQUEST });

    const { data } = await axios.delete(`/api/v1/company/${id}`);

    dispatch({
      type: DELETE_COMPANY_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COMPANY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get company details
export const getCompanyDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_COMPANY_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/company/${id}`);

    dispatch({
      type: GET_COMPANY_DETAILS_SUCCESS,
      payload: data.company,
    });
  } catch (error) {
    dispatch({
      type: GET_COMPANY_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
