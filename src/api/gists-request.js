import { request } from "./request";

export const getGistsApi = (page = 1) => {
    return request.get(`gists/public?page=${page}`)
};

export const searchGistsByNameApi = (name = 'bogdanq') => {
    return request.get(`users/${name}/gists`);
};