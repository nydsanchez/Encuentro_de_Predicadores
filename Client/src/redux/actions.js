import axios from "axios";
import {
  CREATE_RECORD,
  RETRIEVE_DATA,
  UPDATE_DATA,
  SEARCH,
  ERROR,
} from "./actions-types";

const URL = "http://localhost:4000";

export const createRecord = (entity, newData) => {
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

export const retrieveData = (entity) => {
  return (dispatch) => {
    axios
      .get(`${URL}/${entity}`)
      .then((response) => {
        dispatch({
          type: RETRIEVE_DATA,
          payload: { entity: entity, data: response.data },
        });
      })
      .catch((error) => {
        const errorMessage = error.response
          ? error.response.data
          : "Error al cargar los datos";
        dispatch({ type: ERROR, payload: errorMessage });
      });
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

export const search = (entity, id) => {
  return (dispatch) => {
    axios
      .get(`${URL}/${entity}/id?id=${id}`)
      .then((response) => {
        dispatch({
          type: SEARCH,
          payload: { entity: entity, data: response.data },
        });
      })
      .catch((error) => {
        const errorMessage = error.response
          ? error.response.data
          : "Error al obtener los datos";
        dispatch({
          type: ERROR,
          payload: errorMessage,
        });
      });
  };
};
