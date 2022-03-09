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
    getInventoryTable
} from "../actions/pageActions";
import {logout} from "../actions/userActions";
import InputField from "./Form";
import {Sign} from "../components/otherComponents/Sign";
import AreaTable from "../components/teamComponents/AreaTable";
import ExperimentForm from "../components/teamComponents/ExperimentForm";
import axios from "axios";
import HumanExperimentForm from "../components/teamComponents/HumanExperimentForm";
import InfoTeam from "../components/teamComponents/InfoTeam";
import InvetoryTable from "../components/traderComponents/InvetoryTable";
import InfoTrader from "../components/traderComponents/InfoTrader";
import DealForm from "../components/traderComponents/DealForm";
import {Button} from "primereact/button";




class TraderPage extends React.Component{
    constructor(props){
        super(props);
        this.props.setMessageX("");
        this.props.setMessageY("");
        this.props.setMessageR("");
        this.goFuckingBack = this.goFuckingBack.bind(this);
    }

    getInventoryTable() {
        this.props.getInventoryTable();
    }

    componentDidMount() {
        this.getInventoryTable();
    }

    goFuckingBack() {
        this.props.logout();
    }
    render() {
        this.getInventoryTable();
        const {header,style,page,user} = this.props;
        return(
            <div>
                {user.statusUser !== 3 && <Redirect to={"/"}/>}
                <Header
                    topic={header.topic}
                    firstName={header.firstName}
                    secondName={header.secondName}
                    variant={header.variant}
                    style={style}/>

                <InfoTrader inventory_table={page.inventory_table}/>
                <Button label={"Logout"} onClick={this.goFuckingBack} style={style.style.logouttTr}/>
                <DealForm/>
                <InvetoryTable inventory_table={page.inventory_table} style={style}/>
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
        getInventoryTable: () => dispatch(getInventoryTable())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TraderPage)