import axios from 'axios';
import {SET_TABLE} from "./pageActions";

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const SET_SIGN_IN = "SET_SIGN_IN";
export const SET_USER_ANSWER = 'SET_USER_ANSWER';

export const SET_STATUS_USER = 'SET_STATUS_USER';

export const SET_COORD = 'SET_COORD';
export const SET_TEAM = 'SET_TEAM';
export const SET_TRADER = 'SET_TRADER';


export function setCor(code) {
    return {
        type: SET_COORD,
        payload: code
    }
}

export function setTeam(code) {
    return {
        type: SET_TEAM,
        payload: code
    }
}

export function setTrader(code) {
    return {
        type: SET_TRADER,
        payload: code
    }
}


export function logout() {
    return {
        type: SET_STATUS_USER,
        payload: null
    }
}

export function login(userName, type) {
    let pop = {
        username: userName,
        role_id: {
            id: type
        }
    }
    return dispatch => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/authorisation/login',
            data: pop
        }).then(result => {
            console.log("ffff");
            console.log(result.data.toString())
            if (result.data.toString() === "try again") {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: "Участника с таким логином не существует"
                })
            }else {
                dispatch({
                    type: SET_STATUS_USER,
                    payload: result.data
                })
            }
        }).catch(
            dispatch({
                type: LOGIN_FAIL,
                payload: "Участника с таким логином не существует"
            })
        )
    }
}

export function registration(butch) {
    return dispatch => {
        axios({
            method: "post",
            url: 'http://localhost:8080/register',
            data: butch,
        })
            .then(result => {
                console.log(result);
                if (result.status === 201) {
                    dispatch({
                        type: REGISTER,
                        payload: "You was successfully registered"
                    })
                } else {
                    dispatch({
                        type: REGISTER,
                        payload: "Such user has already existed, enter another login for registration.",
                    });
                }
            })
            .catch(result => {
                console.log(result);
                dispatch({
                    type: REGISTER,
                    payload: "Such user has already existed, enter another login for registration.",
                });
            })
        ;
    }
}


export function setAnswer(userAnswer) {
    return{
        type: SET_USER_ANSWER,
        payload: userAnswer
    }
}

export function setLogin(login) {
    return{
        type: SET_SIGN_IN,
        payload: login
    }
}