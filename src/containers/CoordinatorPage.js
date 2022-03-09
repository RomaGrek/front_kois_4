import React from "react";
import {Header} from "../components/otherComponents/Header";
import Canvas from "./Canvas";
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {
    getTeamsTable,
    getMagsTable,
} from "../actions/pageActions";
import {Button} from "primereact/button";

import {logout} from "../actions/userActions";
import InputField from "./Form";
import {Sign} from "../components/otherComponents/Sign";
import AreaTable from "../components/teamComponents/AreaTable";
import ExperimentForm from "../components/teamComponents/ExperimentForm";
import axios from "axios";
import HumanExperimentForm from "../components/teamComponents/HumanExperimentForm";
import InfoTeam from "../components/teamComponents/InfoTeam";
import MagsTable from "../components/coordinatorComponents/MagsTable";
import TeamPage from "./TeamPage";
import TeamsTable from "../components/coordinatorComponents/TeamsTable";
import AddTeamForm from "../components/coordinatorComponents/AddTeamForm";
import AddMagInTeamForm from "../components/coordinatorComponents/AddMagInTeamForm";
import AddMissionForm from "../components/coordinatorComponents/AddMissionForm";
import AddIncidentForm from "../components/coordinatorComponents/AddIncidentForm";
import EndMissionForm from "../components/coordinatorComponents/EndMissionForm";
import AddTraderForm from "../components/coordinatorComponents/AddTraderForm";
import InfoCor from "../components/coordinatorComponents/InfoCor";




class CoordinatorPage extends React.Component{
    constructor(props){
        super(props);
        this.goFuckingBack = this.goFuckingBack.bind(this);
    }


    // фукнция отвечающая за отображение таблицы доступных районов
    getMagsTable(){
        this.props.getMagsTable();
    }


    goFuckingBack() {
        this.props.logout();
    }

    getTeamsTable() {
        this.props.getTeamsTable();
    }
    /* говорит о том, что каждый раз при рендере будет обновляться таблица */
    componentDidMount() {
        this.getMagsTable();
        this.getTeamsTable();

    }



    render() {
        this.getMagsTable();
        this.getTeamsTable();
        const {header,style,page,user} = this.props;
        return(
            <div>
                {user.statusUser !== 1 && <Redirect to={"/"}/>}
                <Header
                    topic={header.topic}
                    firstName={header.firstName}
                    secondName={header.secondName}
                    variant={header.variant}
                    style={style}/>
                <InfoCor/>
                <Button label={"Logout"} onClick={this.goFuckingBack} style={style.style.logouttCor}/>
                <AddTraderForm/>
                <EndMissionForm/>
                <AddIncidentForm/>
                <AddMissionForm/>
                <AddMagInTeamForm/>
                <AddTeamForm/>
                <TeamsTable teams_table={page.teams_table} style={style}/>
                <MagsTable mags_table={page.mags_table} style={style}/>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        header: store.header,
        page: store.page,
        style: store.style,
        user: store.user,
    }
};

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(logout()),
        getMagsTable: () => dispatch(getMagsTable()),
        getTeamsTable: () => dispatch(getTeamsTable())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoordinatorPage)