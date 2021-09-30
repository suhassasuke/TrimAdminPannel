import { API_START, API_END, ACCESS_DENIED, API_ERROR } from '../constants/common/api.type';


export const apiStart = label => ({
    type: API_START,
    payload: label
});

export const apiEnd = label => ({
    type: API_END,
    payload: label
});

export const accessDenied = label => ({
    type: ACCESS_DENIED,
    payload: label
});

export const apiError = label => ({
    type: API_ERROR,
    payload: label
});