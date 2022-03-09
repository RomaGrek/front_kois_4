import {connect} from "react-redux";
import React from "react";
import {Button} from "primereact/button";
import axios from "axios";
import {addNewTeam, setNewTeamId} from "../../actions/pageActions";
import {logout} from "../../actions/userActions";


class AddTeamForm extends React.Component {
    constructor(props) {
        super(props);
        this.adddNewTeam = this.adddNewTeam.bind(this);
        this.readNewIdTeam = this.readNewIdTeam.bind(this);
    }

    adddNewTeam() {
        this.props.addNewTeam(this.props.page.id_new_team);
    }

    readNewIdTeam(e) {
        this.props.setNewTeamId(e.target.value);
    }



    render() {
        const {page, style} = this.props;
        return (
            <div style={style.style.addNewTeam.genDiv}>
                <p>Adding new team</p>
                <div>
                    <p>Enter id team</p>
                    <input maxLength={10} onChange={this.readNewIdTeam} id={"id_n_t"}/>
                </div>
                <div>
                    <Button label="Add" type={"submit"} onClick={this.adddNewTeam}/>
                </div>
                <div>
                    Info: {page.infoAddNewTeam}
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
        addNewTeam: (id_t) => dispatch(addNewTeam(id_t)),
        setNewTeamId: (id) => dispatch(setNewTeamId(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddTeamForm)