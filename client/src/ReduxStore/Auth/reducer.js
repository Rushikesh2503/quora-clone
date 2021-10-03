import {
    SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS,
    LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,
} from './actionType'


const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: ''
}

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNUP_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }
        case SIGNUP_SUCCESS:
            return {
                ...state, isLoading: false, isError: false
            }
        case SIGNUP_FAILURE:
            return {
                ...state, isLoading: false, isError: true
            }
        case LOGIN_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state, isLoading: false, isError: false, isAuth: true, token: payload
            }
        case LOGIN_FAILURE:
            return {
                ...state, isLoading: false, isError: true
            }

        default: return state
    }
}