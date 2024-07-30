import axios from "axios";
import {
  UPDATE_DATA,
  GET_ALL_DATA,
  DATA_FAILURE,
  DATA_SUCCESS,
  CREATE_RECORD,
  ERROR,
} from "./actions-types";

const URL = "http://localhost:4000";

export const createRecord = (entity, newData) => {
  console.log("en el action", entity);
  return (dispatch) => {
    axios
      .post(`${URL}/${entity}`, newData)
      .then((response) => {
        dispatch({
          type: CREATE_RECORD,
          payload: { entity: entity, data: response.data },
        });
      })
      .catch((error) => {
        const errorMessage = error.response
          ? error.response.data
          : "Error al agregar los datos";
        dispatch({
          type: ERROR,
          payload: errorMessage,
        });
      });
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
