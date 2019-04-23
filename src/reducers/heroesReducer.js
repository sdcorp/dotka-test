import * as actionType from '../constants/heroesTypes';

const initialState = {
  heroes: [],
  loading: false,
  error: false
};

const heroes = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ALL_HEROES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionType.ALL_HEROES_SUCCESS:
      return {
        ...state,
        heroes: action.payload,
        loading: false
      };
    case actionType.ALL_HEROES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default heroes;
