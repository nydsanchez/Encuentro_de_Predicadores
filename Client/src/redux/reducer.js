import { GET_ALL_DATA, ERROR, CREATE_RECORD } from "./actions-types";

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
    case GET_ALL_DATA:
      return {
        ...state,

        error: null,
      };

    case CREATE_RECORD: {
      const { entity, data } = payload;
      return {
        ...state,
        data: {
          ...state.data,
          [entity]: [...state.data[entity], data],
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
