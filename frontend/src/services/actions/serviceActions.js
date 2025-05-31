import axios from "axios";
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
} from "../constants/serviceConstants";

// Get all services
export const getAllServices =
  (keyword = "", currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_SERVICES_REQUEST });

      const link = `/aak/l1/serviceDetails?keyword=${keyword}&page=${currentPage}`;
      const { data } = await axios.get(link);

      // Ensure we're dispatching an array
      const services = Array.isArray(data.serviceDetails) ? data.serviceDetails : [];

      dispatch({
        type: GET_ALL_SERVICES_SUCCESS,
        payload: services,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SERVICES_FAIL,
        payload: error.response?.data?.message || "Failed to fetch services",
      });
    }
  };

// Create new service
export const createService = (serviceData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SERVICE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/service/new", serviceData, config);

    dispatch({
      type: CREATE_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update service
export const updateService = (id, serviceData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SERVICE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(`/api/v1/service/${id}`, serviceData, config);

    dispatch({
      type: UPDATE_SERVICE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete service
export const deleteService = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SERVICE_REQUEST });

    const { data } = await axios.delete(`/api/v1/service/${id}`);

    dispatch({
      type: DELETE_SERVICE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get service details
export const getServiceDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SERVICE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/service/${id}`);

    dispatch({
      type: GET_SERVICE_DETAILS_SUCCESS,
      payload: data.service,
    });
  } catch (error) {
    dispatch({
      type: GET_SERVICE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
