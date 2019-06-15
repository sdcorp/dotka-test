import * as actionType from '../constants/heroesTypes';

// Action Creators
export const requestAllHeroes = () => ({ type: actionType.ALL_HEROES_REQUEST });
export const requestAllHeroesFailure = () => ({ type: actionType.ALL_HEROES_FAILURE });
export const requestAllHeroesSuccess = data => ({ type: actionType.ALL_HEROES_SUCCESS, payload: data });

export const findHero = searchTerm => ({ type: actionType.FIND_HERO, payload: searchTerm });
export const resetSearch = () => ({ type: actionType.RESET_SEARCH });

// Saga Action Creator
export const fetchAllHeroes = () => ({ type: actionType.ALL_HEROES_FETCHED });
