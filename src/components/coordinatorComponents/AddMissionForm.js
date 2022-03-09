import {connect} from "react-redux";
import React from "react";
import {Button} from "primereact/button";
import axios from "axios";
import {addMission, setIdMission, setIdTeamForMission, setIdAreaForMission} from "../../actions/pageActions";
import {logout} from "../../actions/userActions";


class AddMissionForm extends React.Component {
    constructor(props) {
        super(props);
        this.c_addNewMission = this.c_addNewMission.bind(this);
        this.c_readMissionId = this.c_readMissionId.bind(this);
        this.c_readIdTeam = this.c_readIdTeam.bind(this);
        this.c_readIdArea = this.c_readIdArea.bind(this);
    }

    c_addNewMission() {
        this.props.addMission(this.props.page.id_mission, this.props.page.id_team_for_mission, this.props.page.id_area_for_mission);
    }

    c_readMissionId(e) {
        this.props.setIdMission(e.target.value);
    }

    c_readIdTeam(e) {
        this.props.setIdTeamForMission(e.target.value);
    }

    c_readIdArea(e) {
        this.props.setIdAreaForMission(e.target.value);
    }


    render() {
        const {page, style} = this.props;
        return (
            <div style={style.style.addNewMission.genDiv}>
                <p>Adding new mission</p>
                <div>
                    <p>Enter new id mission</p>
                    <input maxLength={10} onChange={this.c_readMissionId} id={"id_mission"}/>
                </div>
                <div>
                    <p>Enter id team which you have go on mission</p>
                    <input maxLength={10} onChange={this.c_readIdTeam} id={"id_team_new_mission"}/>
                </div>
                <div>
                    <p>Enter id area</p>
                    <input maxLength={10} onChange={this.c_readIdArea} id={"id_area_new_mission"}/>
                </div>
                <div>
                    <Button label="Add" type={"submit"} onClick={this.c_addNewMission}/>
                </div>
                <div>
                    Info: {page.infoAddMission}
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        page: store.page,
        style: store.style
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addMission: (id_m, id_t, id_a) => dispatch(addMission(id_m, id_t, id_a)),
        setIdMission: (id) => dispatch(setIdMission(id)),
        setIdTeamForMission: (id) => dispatch(setIdTeamForMission(id)),
        setIdAreaForMission: (id) => dispatch(setIdAreaForMission(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddMissionForm)