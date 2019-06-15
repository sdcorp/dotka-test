import * as actionType from '../constants/heroesTypes';

const initialState = {
  heroes: [],
  loading: false,
  error: false,
  findedHero: null
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
    case actionType.FIND_HERO:
      const searchTerm = action.payload;
      const findedHero = state.heroes.find(i => i.localized_name.toLowerCase() === searchTerm.toLowerCase());
      return {
        ...state,
        findedHero
      };
    case actionType.RESET_SEARCH:
      return {
        ...state,
        findedHero: null
      };
    default:
      return state;
  }
};

export default heroes;
