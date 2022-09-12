import { getGistsStart, getGistsSuccess, getGistsError } from "./action"

export const getGists = (page) => async (dispatch, _, api) => {
    try {
        dispatch(getGistsStart());
        
        const {data} = await api.getGistsApi(page);

        dispatch(getGistsSuccess(data));

    } catch (error){
        dispatch(getGistsError());
    }

}