import { getGistsStart, getGistsSuccess, getGistsError, errorSearchGistsByName, successSearchGistsByName, startSearchGistsByName } from "./action"

export const getGists = (page) => async (dispatch, _, api) => {
    try {
        dispatch(getGistsStart());
        
        const {data} = await api.getGistsApi(page);

        dispatch(getGistsSuccess(data));

    } catch (error){
        dispatch(getGistsError(error));
    }

}

export const getUserGist = (name) => async (dispatch, _, api) => {

    try {
        dispatch(startSearchGistsByName());
        const {data} = await api.searchGistsByNameApi(name);
        dispatch(successSearchGistsByName(data));
    } catch (error) {
        dispatch(errorSearchGistsByName(error))
    }
}