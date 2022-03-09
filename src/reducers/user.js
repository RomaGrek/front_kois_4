import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER,
    SET_SIGN_IN,
    SET_USER_ANSWER,
    SET_STATUS_USER,
    SET_COORD,
    SET_TRADER,
    SET_TEAM
} from "../actions/userActions";

const initialState = {
    login: '',
    isLogin: false,
    userAnswer: "",
    statusUser: null,
    coordinator: null,
    team:null,
    trader: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_ANSWER:
            return {...state, userAnswer: action.payload};
        case REGISTER:
            return {...state, userAnswer: action.payload};
        case LOGIN_FAIL:
            return {...state, userAnswer: action.payload};
        case LOGIN_SUCCESS:
            return {...state, userAnswer: action.payload};
        case LOGOUT:
            return {...state, isLogin: action.payload,};
        case SET_SIGN_IN:
            return {...state, isLogin: action.payload};
        case SET_STATUS_USER:
            return {...state, statusUser: action.payload};
        case SET_TEAM:
            return {...state, team: action.payload};
        case SET_TRADER:
            return {...state, trader: action.payload};
        case SET_COORD:
            return {...state, coordinator: action.payload};
        default:
            return state;
    }
}