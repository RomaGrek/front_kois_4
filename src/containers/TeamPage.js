import React from "react";
import {Header} from "../components/otherComponents/Header";
import Canvas from "./Canvas";
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {
    getListAreaTeam,
    setMessageR,
    setMessageX,
    setMessageY,
    setStatusTeam
} from "../actions/pageActions";
import {logout} from "../actions/userActions";
import InputField from "./Form";
import {Sign} from "../components/otherComponents/Sign";
import AreaTable from "../components/teamComponents/AreaTable";
import ExperimentForm from "../components/teamComponents/ExperimentForm";
import axios from "axios";
import HumanExperimentForm from "../components/teamComponents/HumanExperimentForm";
import InfoTeam from "../components/teamComponents/InfoTeam";
import {Button} from "primereact/button";




class TeamPage extends React.Component{
    constructor(props){
        super(props);
        this.props.setMessageX("");
        this.props.setMessageY("");
        this.props.setMessageR("");
        this.goFuckingBack = this.goFuckingBack.bind(this);
    }


    // фукнция отвечающая за отображение таблицы доступных районов
    getAreaListTable(){
        this.props.getListAreaTeam();
    }

    setStatusTeam() {
        this.props.setStatusTeam();
    }
    /* говорит о том, что каждый раз при рендере будет обновляться таблица */
    componentDidMount() {
        this.getAreaListTable();
        this.setStatusTeam();

    }

    goFuckingBack() {
        this.props.logout();
    }

    render() {
        this.getAreaListTable();
        this.setStatusTeam();
        const {header,style,page,user} = this.props;
        return(
            <div>
                {user.statusUser !== 2 && <Redirect to={"/"}/>}
                <Header
                    topic={header.topic}
                    firstName={header.firstName}
                    secondName={header.secondName}
                    variant={header.variant}
                    style={style}/>
                <InfoTeam status_team = {page.status_team}/>


                    <Button label={"Logout"} onClick={this.goFuckingBack} style={style.style.logoutt}/>


                <HumanExperimentForm/>
                <ExperimentForm />
                <AreaTable area_table={page.area_table} style={style}/>
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
        setMessageR: messageR => dispatch(setMessageR(messageR)),
        setMessageX: messageX => dispatch(setMessageX(messageX)),
        setMessageY: messageY => dispatch(setMessageY(messageY)),
        getListAreaTeam: () => dispatch(getListAreaTeam()),
        setStatusTeam: () => dispatch(setStatusTeam())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamPage)