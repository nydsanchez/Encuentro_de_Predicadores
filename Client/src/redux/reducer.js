import {
  ERROR,
  CREATE_RECORD,
  RETRIEVE_DATA,
  SEARCH,
  DELETE_DATA,
} from "./actions-types";

const initialState = {
  data: {
    churches: [],
    tickets: [],
    people: [],
  },
  search: {
    ticket: [],
    person: [],
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
        error: null,
      };
    }

    case DELETE_DATA: {
      return {
        ...state,
        data: {
          ...state.data,
          churches: state.data.churches.filter(
            (church) => church.id !== payload
          ),
        },
        error: null,
      };
    }

    case SEARCH: {
      const { entity, data } = payload;
      return {
        ...state,
        search: { ...state.search, [entity]: data },
        error: null,
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
