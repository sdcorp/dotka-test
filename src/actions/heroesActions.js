import * as actionType from '../constants/heroesTypes';

// Action Creators
export const requestAllHeroes = () => ({ type: actionType.ALL_HEROES_REQUEST });
export const requestAllHeroesFailure = () => ({ type: actionType.ALL_HEROES_FAILURE });
export const requestAllHeroesSuccess = data => ({ type: actionType.ALL_HEROES_SUCCESS, payload: data });

// Saga Action Creator
export const fetchAllHeroes = () => ({ type: actionType.ALL_HEROES_FETCHED });
