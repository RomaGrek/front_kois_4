import {
    CANVAS_WIDTH,
    DEVICE_TYPE,
    SET_ID_EXP_T,
    PAGE_WIDTH,
    CANVAS_COF,
    SET_TABLE,
    SET_MESSAGE_R,
    SET_MESSAGE_X,
    SET_MESSAGE_Y,
    ADD_DOT,
    CLOCK_SIZE,
    SET_ID_MIS_T,
    SET_SMKR_T,
    SET_ID_HUMAN_T,
    SET_ID_EXP_HUM_T,
    MARGIN_LEFT,
    MARGIN_TOP,
    SET_AREA_TABLE,
    SET_INFO_ADD_EXPERIMENT,
    SET_INFO_ADD_HUMAN_ON_EXP,
    SET_INVENTORY_TABLE,
    SET_ID_EXEMPLAR,
    SET_ID_DEAL,
    SET_INFO_DEAL,
    SET_ID_SELLER,
    SET_ID_BUYER,
    SET_STATUS_TEAM,
    SET_TEAMS_TABLE,
    SET_MAGS_TABLE,
    SET_NEW_ID_TEAM,
    SET_INFO_NEW_TEAM,
    SET_INFO_ADD_MAG_IN_TEAM,
    SET_ID_TEAM_FOR_NEW_TEAM,
    SET_ID_MAG_FOR_NEW_TEAM,
    SET_INFO_ADD_NEW_MISSION,
    SET_ID_AREA_FOR_MISSION,
    SET_ID_TEAM_FOR_MISSION,
    SET_ID_MISSION,
    SET_ID_MISSION_FOR_INCIDENT,
    SET_INFO_ADD_INCIDENT,
    SET_ID_MAG_INCIDENT,
    SET_ID_INCIDENT,
    SET_ID_MISSION_END,
    SET_INFO_END_MISSION,
    SET_INFO_ADD_TRADER,
    SET_ID_MAG_TRADER
} from "../actions/pageActions";

const  initialState = {
    status_team: null,
    id_experiment_team: null,
    id_mission_team: null,
    smoke_received_team: null,
    id_human_team: null,
    id_experiment_human_team: null,
    id_deal_trader: null,
    id_exemplar_trader: null,
    id_buyer_trader: null,
    id_seller_trader: null,
    id_new_team: null,
    id_mag_for_add_team: null,
    id_team_for_add_mag: null,
    id_mission: null,
    id_team_for_mission: null,
    id_area_for_mission: null,
    id_incident: null,
    id_magician_incident: null,
    id_mission_incident: null,
    id_mission_end: null,
    id_magician_trader: null,
    cof: 0.5,
    area_table: [
    ],
    table: [
    ],
    inventory_table: [],
    mags_table: [],
    teams_table: [],
    mL: 10,
    mT:10,
    messageX: "",
    messageY: "",
    messageR: "",
    pageWidth: 1440,
    canvasWidth: 0,
    clockSiz3: 600,
    deviceType: null,
    infoAddExperiment: "",
    infoAddHumanInExp: "",
    infoDoDeal: "",
    infoAddNewTeam: "",
    infoAddMagInTeam: "",
    infoAddMission: "",
    infoAddIncident: "",
    infoEndMission: "",
    infoAddTrader: ""
}

export function pageReducer(state  = initialState,action) {
    switch (action.type) {
        case  MARGIN_LEFT:
            return{...state,mL: action.payload};
        case  MARGIN_TOP:
            return{...state,mT: action.payload};
        case CANVAS_COF:
            return{...state,cof: action.payload};
        case CLOCK_SIZE:
            return{...state,clockSiz3: action.payload};
        case ADD_DOT:
            return {...state, table: [...state.table, action.payload]};
        case SET_MESSAGE_Y:
            return{...state,messageY: action.payload};
        case SET_TABLE:
            return {...state,table: action.payload};
        case PAGE_WIDTH:
            return{...state,pageWidth: action.payload};
        case SET_MESSAGE_R:
            return{...state,messageR: action.payload};
        case SET_MESSAGE_X:
            return{...state,messageX: action.payload};
        case DEVICE_TYPE:
            return{...state,deviceType: action.payload};
        case CANVAS_WIDTH:
            return {...state,canvasWidth: action.payload};
        case SET_ID_EXP_T:
            return {...state,id_experiment_team: action.payload};
        case SET_ID_MIS_T:
            return {...state,id_mission_team: action.payload};
        case SET_SMKR_T:
            return {...state,smoke_received_team: action.payload};
        case SET_ID_HUMAN_T:
            return {...state, id_human_team: action.payload}
        case SET_ID_EXP_HUM_T:
            return {...state, id_experiment_human_team: action.payload}
        case SET_AREA_TABLE:
            return {...state, area_table: action.payload};
        case SET_INFO_ADD_EXPERIMENT:
            return {...state, infoAddExperiment: action.payload};
        case SET_INFO_ADD_HUMAN_ON_EXP:
            return {...state, infoAddHumanInExp: action.payload};
        case SET_INVENTORY_TABLE:
            return {...state, inventory_table: action.payload};
        case SET_INFO_DEAL:
            return {...state, infoDoDeal: action.payload};
        case SET_ID_DEAL:
            return {...state, id_deal_trader: action.payload};
        case SET_ID_EXEMPLAR:
            return {...state, id_exemplar_trader: action.payload};
        case SET_ID_BUYER:
            return {...state, id_buyer_trader: action.payload};
        case SET_ID_SELLER:
            return {...state, id_seller_trader: action.payload};
        case SET_STATUS_TEAM:
            return {...state, status_team: action.payload};
        case SET_MAGS_TABLE:
            return {...state, mags_table: action.payload};
        case SET_TEAMS_TABLE:
            return {...state, teams_table: action.payload};
        case SET_INFO_NEW_TEAM:
            return {...state, infoAddNewTeam: action.payload};
        case SET_NEW_ID_TEAM:
            return {...state, id_new_team: action.payload};
        case SET_ID_MAG_FOR_NEW_TEAM:
            return {...state, id_mag_for_add_team: action.payload};
        case SET_INFO_ADD_MAG_IN_TEAM:
            return {...state, infoAddMagInTeam: action.payload};
        case SET_ID_TEAM_FOR_NEW_TEAM:
            return {...state, id_team_for_add_mag: action.payload};
        case SET_INFO_ADD_NEW_MISSION:
            return {...state, infoAddMission: action.payload};
        case SET_ID_MISSION:
            return {...state, id_mission: action.payload};
        case SET_ID_TEAM_FOR_MISSION:
            return {...state, id_team_for_mission: action.payload};
        case SET_ID_AREA_FOR_MISSION:
            return {...state, id_area_for_mission: action.payload};
        case SET_INFO_ADD_INCIDENT:
            return {...state, infoAddIncident: action.payload};
        case SET_ID_INCIDENT:
            return {...state, id_incident: action.payload};
        case SET_ID_MAG_INCIDENT:
            return {...state, id_magician_incident: action.payload};
        case SET_ID_MISSION_FOR_INCIDENT:
            return {...state, id_mission_incident: action.payload};
        case SET_INFO_END_MISSION:
            return {...state, infoEndMission: action.payload};
        case SET_ID_MISSION_END:
            return {...state, id_mission_end: action.payload};
        case SET_INFO_ADD_TRADER:
            return {...state, infoAddTrader: action.payload};
        case SET_ID_MAG_TRADER:
            return {...state, id_magician_trader: action.payload};
    }
    return state;
}