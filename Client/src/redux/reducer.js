import { ERROR, CREATE_RECORD, RETRIEVE_DATA } from "./actions-types";

const initialState = {
  data: {
    churches: [],
    tickets: [],
    people: [],
  },
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_RECORD: {
      const { entity, data } = payload;
      return {
        ...state,
        data: {
          ...state.data,
          [entity]: [...state.data[entity], data],
        },
        error: null,
      };
    }

    case RETRIEVE_DATA: {
      const { entity, data } = payload;
      return {
        ...state,
        data: { ...state.data, [entity]: data },
        error: {
          ...state.error,
          error: null,
        },
      };
    }

    case ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
