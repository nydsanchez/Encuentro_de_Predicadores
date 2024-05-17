import {
  ADD_DATA,
  UPDATE_DATA,
  GET_ALL_DATA,
  DATA_FAILURE,
  DATA_SUCCESS,
} from "./actions-types";

const initialState = {
  data: {
    churches: [],
    tickets: [],
    people: [],
    asistencia: [],
  },
  error: null,
  success: false,
  loading: false,
};

const reducer = (state = initialState, { type, payload, success }) => {
  switch (type) {
    case GET_ALL_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_DATA: {
      if (success) {
        const { entity, data } = payload;
        return {
          ...state,
          data: {
            ...state.data,
            [entity]: [...state.data[entity], data], // Agrega el nuevo dato al final del array existente
          },
          loading: false,
          success: true,
          error: null,
        };
      } else {
        return {
          ...state,
          loading: false,
          success: false,
          error: payload,
        };
      }
    }

    case UPDATE_DATA:
      if (success) {
        const { entity, data } = payload;
        return {
          ...state,
          data: {
            ...state.data,
            [entity]: state.data[entity].map((item) =>
              item.id === data.id ? data : item
            ),
          },
          loading: false,
          success: true,
          error: null,
        };
      } else {
        return {
          ...state,
          loading: false,
          success: false,
          error: payload,
        };
      }

    case DATA_SUCCESS: {
      const { entity, data } = payload;
      return {
        ...state,
        data: {
          ...state.data,
          [entity]: data,
        },
        loading: false,
        success: true,
        error: null,
      };
    }

    case DATA_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
