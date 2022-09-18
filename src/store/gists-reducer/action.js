import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR,
  START_SEARCH_GISTS_BY_NAME, SUCCESS_SEARCH_GIST_BY_NAME, ERROR_SEARCH_GISTS_BY_NAME } from "./types";

export const startSearchGistsByName = () => {
  return {
    type: START_SEARCH_GISTS_BY_NAME
  }
};

export const successSearchGistsByName = (gist) => {
  return {
    type: SUCCESS_SEARCH_GIST_BY_NAME, 
    payload: gist 
  }
};

export const errorSearchGistsByName = (error) => {
  return {
    type: ERROR_SEARCH_GISTS_BY_NAME, 
    payload: error
  }
}

export const getGistsStart = () => {
  return { 
    type:  GET_GISTS_START
  };
};

export const getGistsSuccess = (gists) => {
  return {
    type: GET_GISTS_SUCCESS,
    payload: gists
  }
}

export const getGistsError = (error) => {
  return { 
    type:  GET_GISTS_ERROR,
    payload: error
  };
};


