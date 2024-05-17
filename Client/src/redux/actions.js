import axios from "axios";
import {
  ADD_DATA,
  UPDATE_DATA,
  GET_ALL_DATA,
  DATA_FAILURE,
  DATA_SUCCESS,
} from "./actions_types";

const URL = "http://localhost:4000";

export const addData = (entity, newData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/${entity}`, newData);
      return dispatch({
        type: ADD_DATA,
        payload: { entity, data: response.data },
        success: true,
      });
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data
        : "Error al agregar los datos";
      dispatch({
        type: DATA_FAILURE,
        payload: errorMessage,
        success: false,
      });
    }
  };
};

export const getAllData = (entity) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_DATA });
    try {
      const response = await axios.get(`${URL}/${entity}`);
      dispatch({
        type: DATA_SUCCESS,
        payload: { entity, data: response.data },
        success: true,
      });
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data
        : "Error al cargar los datos";
      dispatch({
        type: DATA_FAILURE,
        payload: errorMessage,
        success: false,
      });
    }
  };
};

export const updateData = (entity, newData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${URL}/${entity}/${newData.id}`,
        newData
      );
      dispatch({
        type: UPDATE_DATA,
        payload: { entity, data: response.data },
        success: true,
      });
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data
        : "Error al actualizar los datos";
      dispatch({
        type: DATA_FAILURE,
        payload: errorMessage,
        success: false,
      });
    }
  };
};
