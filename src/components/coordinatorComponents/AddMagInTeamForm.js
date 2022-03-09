import {connect} from "react-redux";
import React from "react";
import {Button} from "primereact/button";
import axios from "axios";
import {addNewMagInTeam, setNewMagId, setNewTeamIdMag} from "../../actions/pageActions";
import {logout} from "../../actions/userActions";


class AddMagInTeamForm extends React.Component {
    constructor(props) {
        super(props);
        this.c_addNewMagInTeam = this.c_addNewMagInTeam.bind(this);
        this.readNewIdMagTeam = this.readNewIdMagTeam.bind(this);
        this.readNewTeamIdForMag = this.readNewTeamIdForMag.bind(this);
    }

    c_addNewMagInTeam() {
        this.props.addNewMagInTeam(this.props.page.id_mag_for_add_team, this.props.page.id_team_for_add_mag);
    }

    readNewIdMagTeam(e) {
        this.props.setNewMagId(e.target.value);
    }

    readNewTeamIdForMag(e) {
        this.props.setNewTeamIdMag(e.target.value);
    }


    render() {
        const {page, style} = this.props;
        return (
            <div style={style.style.addMagInNewTeam.genDiv}>
                <p>Adding mag in team</p>
                <div>
                    <p>Enter id mag for adding in team</p>
                    <input maxLength={10} onChange={this.readNewIdMagTeam} id={"id_mag_new"}/>
                </div>
                <div>
                    <p>Enter id team which you have add magician</p>
                    <input maxLength={10} onChange={this.readNewTeamIdForMag} id={"id_team_new"}/>
                </div>
                <div>
                    <Button label="Add" type={"submit"} onClick={this.c_addNewMagInTeam}/>
                </div>
                <div>
                    Info: {page.infoAddMagInTeam}
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
        setNewMagId: (id) => dispatch(setNewMagId(id)),
        setNewTeamIdMag: (id) => dispatch(setNewTeamIdMag(id)),
        addNewMagInTeam: (id_m, id_t) => dispatch(addNewMagInTeam(id_m, id_t))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddMagInTeamForm)