import axios from 'axios';
import {createRenderer} from "react-dom/test-utils";

export const CANVAS_WIDTH = 'CANVAS_WIDTH';
export const CANVAS_HEIGHT = 'CANVAS_HEIGHT';
export const DEVICE_TYPE = 'DEVICE_TYPE';
export const CANVAS_COF = 'CANVAS_COF';
export const PAGE_WIDTH = 'PAGE_WIDTH';
export const SET_TABLE = 'SET_TABLE';
export const MARGIN_LEFT = 'MARGIN_LEFT';
export const MARGIN_TOP = 'MARGIN_TOP';
export const SET_MESSAGE_X = 'SET_MESSAGE_X';
export const SET_MESSAGE_Y = 'SET_MESSAGE_Y';
export const SET_MESSAGE_R = 'SET_MESSAGE_R';
export const ADD_DOT = "ADD_DOT";
export const CLOCK_SIZE = 'CLOCK_SIZE';

/* статус команды */
export const SET_STATUS_TEAM = 'SET_STATUS_TEAM';

// /* добавления экшена на получение доступных районов  */
export const SET_AREA_TABLE = 'SET_AREA_TABLE';

/* информация о добавлении нового эксперименте */
export const SET_INFO_ADD_EXPERIMENT = 'SET_INFO_ADD_EXPERIMENT';

/* информация о добавлении инфы о том, что человек участвовал в эксперименте */
export const SET_INFO_ADD_HUMAN_ON_EXP = 'SET_INFO_ADD_HUMAN_ON_EXP';

/* для отправки данных эксперимент команда */
export const SET_ID_EXP_T = 'SET_ID_EXP_T';
export const SET_ID_MIS_T ='SET_ID_MIS_T';
export const SET_SMKR_T = 'SET_SMKR_T';
/* для отправки данных человек в эксерименте комнда */
export const SET_ID_HUMAN_T = 'SET_ID_HUMAN_T';
export const SET_ID_EXP_HUM_T = 'SET_ID_EXP_HUM_T';

/* получения инвенторя для трейдера (таблица) */
export const SET_INVENTORY_TABLE = 'SET_INVENTORY_TABLE';

/* совершение сделки */
export const SET_INFO_DEAL = 'SET_INFO_DEAL';
export const SET_ID_DEAL = 'SET_ID_DEAL';
export const SET_ID_EXEMPLAR = 'SET_ID_EXEMPLAR';
export const SET_ID_BUYER = 'SET_ID_BUYER';
export const SET_ID_SELLER = 'SET_ID_SELLER';

/* координатор */

/* Получение всех магов */
export const SET_MAGS_TABLE = 'SET_MAGS_TABLE';
/* Получение всех команд */
export const SET_TEAMS_TABLE = 'SET_TEAMS_TABLE';

/* инфа о добавлении новой команды */
export const SET_INFO_NEW_TEAM = 'SET_INFO_NEW_TEAM';
/* поля для добавления новой команды */
export const SET_NEW_ID_TEAM = 'SET_NEW_ID_TEAM';

/* инфа добавление мага в команду */
export const SET_INFO_ADD_MAG_IN_TEAM = 'SET_INFO_ADD_MAG_IN_TEAM';
/* поля для добавления мага в команду */
export const SET_ID_MAG_FOR_NEW_TEAM = 'SET_ID_MAG_FOR_NEW_TEAM';
export const SET_ID_TEAM_FOR_NEW_TEAM = 'SET_ID_TEAM_FOR_NEW_TEAM';

/* инфа о добавлении новой миссии */
export const SET_INFO_ADD_NEW_MISSION = 'SET_INFO_ADD_NEW_MISSION';
/* поля для добавлении новой миссии */
export const SET_ID_MISSION = 'SET_ID_MISSION';
export const SET_ID_TEAM_FOR_MISSION = 'SET_ID_TEAM_FOR_MISSION';
export const SET_ID_AREA_FOR_MISSION = 'SET_ID_AREA_FOR_MISSION';

/* инфа о добавлении инцедента */
export const SET_INFO_ADD_INCIDENT = 'SET_INFO_ADD_INCIDENT';
/* поля для добавления инцидента */
export const SET_ID_INCIDENT = 'SET_ID_INCIDENT';
export const SET_ID_MAG_INCIDENT = 'SET_ID_MAG_INCIDENT';
export const SET_ID_MISSION_FOR_INCIDENT = 'SET_ID_MISSION_FOR_INCIDENT';

/* информация о завершении задания */
export const SET_INFO_END_MISSION = 'SET_INFO_END_MISSION';
/* поля для завершения задания */
export const SET_ID_MISSION_END = 'SET_ID_MISSION_END';

/* информация о добавлении трейдера */
export const SET_INFO_ADD_TRADER = 'SET_INFO_ADD_TRADER';
/* поля для добавления трейдера */
export const SET_ID_MAG_TRADER = 'SET_ID_MAG_TRADER';

export function setMarginLeft(margin) {
    return{
        type: MARGIN_LEFT,
        payload: margin
    }
}

export function setMarginTop(margin) {
    return{
        type: MARGIN_TOP,
        payload: margin
    }
}

export function setPageWidth(width) {
    return {
        type: PAGE_WIDTH,
        payload: width
    }
}

export function setClock(width) {
    return {
        type: CLOCK_SIZE,
        payload: width
    }

}

export function getTable() {
    return dispatch => {
        let header = localStorage.getItem('loginIn');
        axios({
            url: 'http://localhost:8080/result',
            method: 'post',
            headers: { Authorization: header,}
        }).then(data =>{
            dispatch({
                type: SET_TABLE,
                payload: data.data
            })
        }).catch(data => console.log(data));
    }
}

export function getMagsTable() {
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/coordinator/showMagician',
            method: 'get'
        }).then(data =>{
            dispatch({
                type: SET_MAGS_TABLE,
                payload: data.data
            })
        }).catch(data => console.log(data));
    }
}

export function getTeamsTable() {
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/coordinator/showTeam',
            method: 'get'
        }).then(data =>{
            dispatch({
                type: SET_TEAMS_TABLE,
                payload: data.data
            })
        }).catch(data => console.log(data));
    }
}


/* экшн получения списка доступных районов СДЕЛАТЬ НОРМ ПАРАМЕТРЫ*/

export function getListAreaTeam() {
    let pop = {
        id: 591
    }
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/team/getArea',
            method: 'post',
            data: pop
        }).then(data =>{
            dispatch({
                type: SET_AREA_TABLE,
                payload: data.data
            })
        }).catch(data => console.log(data));
    }
}

export function getInventoryTable() {
    let pop = {
        id: 1152
    }
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/trader/getInventory',
            method: 'post',
            data: pop
        }).then(data => {
            dispatch({
                type: SET_INVENTORY_TABLE,
                payload: data.data
            });
        }).catch(data => console.log(data));
    }
}

/* добавление эксперимента СДЕЛАТЬ НОРМ ПАРАМЕТРЫ*/
export function addExperiment(id_e, id_m, smk) {
    let pop = {
        id: id_e,
        id_mission: id_m,
        smoke_received: smk
    }
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/team/doExperiment',
            method: 'post',
            data: pop
        }).then(data => {
            dispatch({
                type: SET_INFO_ADD_EXPERIMENT,
                payload: data.data
            })
        }).catch(data => console.log(data));
        document.getElementById("id_exp_t").value = "";
        document.getElementById("id_mis_t").value = "";
        document.getElementById("id_smkr_t").value = "";
    }
}

export function doDeal(id_d, id_ex, id_b, id_s) {
    let pop = {
        id: id_d,
        id_exemplar: id_ex,
        id_buyer: id_b,
        id_seller: id_s
    }
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/trader/doDeal',
            method: 'post',
            data: pop
        }).then(data => {
            dispatch({
                type: SET_INFO_DEAL,
                payload: data.data
            })
        }).catch(data => console.log(data));
        document.getElementById("id_d").value = "";
        document.getElementById("id_b").value = "";
        document.getElementById("id_s").value = "";
        document.getElementById("id_e").value = "";

    }
}

export function addNewTeam(id_t) {
    let pop = {
        id: id_t
    }
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/coordinator/addTeam',
            method: 'post',
            data: pop
        }).then(data => {
            dispatch({
                type: SET_INFO_NEW_TEAM,
                payload: data.data
            })
        }).catch(data => console.log(data));
        document.getElementById("id_n_t").value = "";

    }
}

export function addNewMagInTeam(id_mag, id_team) {
    let pop = {
        id: id_mag,
        id_team: id_team
    }
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/coordinator/addParticipant',
            method: 'post',
            data: pop
        }).then(data => {
            dispatch({
                type: SET_INFO_ADD_MAG_IN_TEAM,
                payload: data.data
            })
        }).catch(data => console.log(data));
        document.getElementById("id_mag_new").value = "";
        document.getElementById("id_team_new").value = "";
    }
}

export function addMission(id_mis, id_t, id_a) {
    let pop = {
        id: id_mis,
        id_team: id_t,
        id_area: id_a
    }
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/coordinator/addMission',
            method: 'post',
            data: pop
        }).then(data => {
            dispatch({
                type: SET_INFO_ADD_NEW_MISSION,
                payload: data.data
            })
        }).catch(data => console.log(data));
        document.getElementById("id_mission").value = "";
        document.getElementById("id_team_new_mission").value = "";
        document.getElementById("id_area_new_mission").value = "";
    }
}

export function addIncident(id_i, id_mag, id_mission) {
    let pop = {
        id: id_i,
        id_mission: id_mission,
        id_magician: id_mag
    }
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/coordinator/addIncident',
            method: 'post',
            data: pop
        }).then(data => {
            dispatch({
                type: SET_INFO_ADD_INCIDENT,
                payload: data.data
            })
        }).catch(data => console.log(data));
        document.getElementById("id_inc").value = "";
        document.getElementById("id_mag_i").value = "";
        document.getElementById("id_mis_i").value = "";
    }
}

export function endMission(id_m) {
    let pop = {
        id: id_m
    }
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/coordinator/setEnd',
            method: 'post',
            data: pop
        }).then(data => {
            dispatch({
                type: SET_INFO_END_MISSION,
                payload: data.data
            })
        }).catch(data => console.log(data));
        document.getElementById("id_m_end").value = "";
    }
}

export function addTrader(id_m) {
    let pop = {
        id_magician: id_m
    }
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/coordinator/addTrader',
            method: 'post',
            data: pop
        }).then(data => {
            dispatch({
                type: SET_INFO_ADD_TRADER,
                payload: data.data
            })
        }).catch(data => console.log(data));
        document.getElementById("id_mag_tra").value = "";
    }
}

export function setMagIdTrader(id) {
    return {
        type: SET_ID_MAG_TRADER,
        payload: id
    }
}

export function setEndTimeM(id) {
    return {
        type: SET_ID_MISSION_END,
        payload: id
    }
}

export function setIdIncident(id) {
    return {
        type: SET_ID_INCIDENT,
        payload: id
    }
}

export function setIdMagInc(id) {
    return {
        type: SET_ID_MAG_INCIDENT,
        payload: id
    }
}

export function setIdMisInc(id) {
    return {
        type: SET_ID_MISSION_FOR_INCIDENT,
        payload: id
    }
}

export function setIdMission(id) {
    return {
        type: SET_ID_MISSION,
        payload: id
    }
}

export function setIdTeamForMission(id) {
    return {
        type: SET_ID_TEAM_FOR_MISSION,
        payload: id
    }
}

export function setIdAreaForMission(id) {
    return {
        type: SET_ID_AREA_FOR_MISSION,
        payload: id
    }
}

export function setNewMagId(id) {
    return {
        type: SET_ID_MAG_FOR_NEW_TEAM,
        payload: id
    }
}

export function setNewTeamIdMag(id) {
    return {
        type: SET_ID_TEAM_FOR_NEW_TEAM,
        payload: id
    }
}

export function setNewTeamId(id) {
    return {
        type: SET_NEW_ID_TEAM,
        payload: id
    }
}



/* получение статуса команды */

export function setStatusTeam() {
    let pop = {
        id: 591
    }
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/team/check',
            method: 'post',
            data: pop
        }).then(data => {
            dispatch({
                type: SET_STATUS_TEAM,
                payload: data.data
            })
        }).catch(data => console.log(data));

    }
}


/* внесение информации об участии человека в эксперименте */
export function addHumanInExperiment(id_h, id_e_h) {
    let pop = {
        id: id_h,
        id_experiment: id_e_h
    }
    return dispatch => {
        axios({
            url: 'http://localhost:8080/users/team/updateHuman',
            method: 'post',
            data: pop
        }).then(data => {
            dispatch({
                type: SET_INFO_ADD_HUMAN_ON_EXP,
                payload: data.data
            })
        }).catch(data => console.log(data));

    }
}


export function setCof(cof) {
    return{
        type: CANVAS_COF,
        payload: cof
    }

}

// export function sendPoint(butch){
//     return dispatch => {
//         let header = localStorage.getItem("loginIn");
//         axios({
//             url: 'http://localhost:8080/table',
//             data: butch,
//             method: 'post',
//             headers: {
//                 Authorization: header
//             },
//         })
//             .then(data => {
//                 console.log(data);
//                 dispatch({
//                     type: ADD_DOT,
//                     payload: data.data,
//                 })
//             })
//             .catch(data => console.log(data));
//         dispatch({
//             type: SET_X,
//             payload: null,
//         });
//         dispatch({
//             type: SET_Y,
//             payload: null,
//         });
//         document.getElementById("X").value = "";
//         document.getElementById("Y").value = "";
//     }
// }

export function setWidth(width) {
    console.log("Canvas width: " + width);
    return{
        type: CANVAS_WIDTH,
        payload: width
    }
}

export function setHeight(height) {
    return{
        type: CANVAS_HEIGHT,
        payload: height
    }
}

export function setDevice(device) {
    return{
        type: DEVICE_TYPE,
        payload: device
    }
}

export function setIdExpT(id) {
    return{
        type: SET_ID_EXP_T,
        payload: id
    }
}

export function setIdMisT(id) {
    return{
        type: SET_ID_MIS_T,
        payload: id
    }
}

export function setSmkrT(count) {
    return{
        type: SET_SMKR_T,
        payload: count
    }
}

export function setIdHunT(id) {
    return {
        type: SET_ID_HUMAN_T,
        payload: id
    }
}

export function setIdExpHumT(id) {
    return {
        type: SET_ID_EXP_HUM_T,
        payload: id
    }
}

export function setIdDeal(id) {
    return {
        type: SET_ID_DEAL,
        payload: id
    }
}

export function setIdExe(id) {
    return {
        type: SET_ID_EXEMPLAR,
        payload: id
    }
}

export function setIdBuy(id) {
    return {
        type: SET_ID_BUYER,
        payload: id
    }
}


export function setIdSel(id) {
    return {
        type: SET_ID_SELLER,
        payload: id
    }
}

export function setMessageR(message) {
    return{
        type: SET_MESSAGE_R,
        payload: message
    }
}

export function setMessageX(message) {
    return{
        type: SET_MESSAGE_X,
        payload: message
    }
}

export function setMessageY(message) {
    return{
        type: SET_MESSAGE_Y,
        payload: message
    }
}