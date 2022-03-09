import {connect} from "react-redux";
import React from "react";
import {Button} from "primereact/button";
import axios from "axios";
import {addIncident, setIdIncident, setIdMagInc, setIdMisInc} from "../../actions/pageActions";
import {logout} from "../../actions/userActions";


class AddIncidentForm extends React.Component {
    constructor(props) {
        super(props);
        this.c_addNewIncident = this.c_addNewIncident.bind(this);
        this.c_readIncidentId = this.c_readIncidentId.bind(this);
        this.c_readMagId = this.c_readMagId.bind(this);
        this.c_readMisId = this.c_readMisId.bind(this);
    }

    c_addNewIncident() {
        this.props.addIncident(this.props.page.id_incident, this.props.page.id_magician_incident, this.props.page.id_mission_incident);
    }

    c_readIncidentId(e) {
        this.props.setIdIncident(e.target.value);
    }

    c_readMagId(e) {
        this.props.setIdMagInc(e.target.value);
    }

    c_readMisId(e) {
        this.props.setIdMisInc(e.target.value);
    }


    render() {
        const {page, style} = this.props;
        return (
            <div style={style.style.addIncident.genDiv}>
                <p>Adding new incident</p>
                <div>
                    <p>Enter new id incident</p>
                    <input maxLength={10} onChange={this.c_readIncidentId} id={"id_inc"}/>
                </div>
                <div>
                    <p>Enter id magician</p>
                    <input maxLength={10} onChange={this.c_readMagId} id={"id_mag_i"}/>
                </div>
                <div>
                    <p>Enter id mission</p>
                    <input maxLength={10} onChange={this.c_readMisId} id={"id_mis_i"}/>
                </div>
                <div>
                    <Button label="Add" type={"submit"} onClick={this.c_addNewIncident}/>
                </div>
                <div>
                    Info: {page.infoAddIncident}
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
        addIncident: (id_i, id_mag, id_mis) => dispatch(addIncident(id_i, id_mag, id_mis)),
        setIdIncident: (id) => dispatch(setIdIncident(id)),
        setIdMagInc: (id) => dispatch(setIdMagInc(id)),
        setIdMisInc: (id) => dispatch(setIdMisInc(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddIncidentForm)