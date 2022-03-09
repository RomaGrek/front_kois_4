import {connect} from "react-redux";
import React from "react";
import {Button} from "primereact/button";
import axios from "axios";
import {setIdExpT, setIdMisT, setSmkrT,getTable, sendPoint, setMessageR, setMessageX, setMessageY, setR, setX, setY, addExperiment} from "../../actions/pageActions";
import {logout} from "../../actions/userActions";


class ExperimentForm extends React.Component {
    constructor(props) {
        super(props);
        this.addHuman = this.addHuman.bind(this);
        this.readIdExp = this.readIdExp.bind(this);
        this.readIdMis = this.readIdMis.bind(this);
        this.readSmkr = this.readSmkr.bind(this);
    }

    addHuman() {
        this.props.addExperiment(this.props.page.id_experiment_team, this.props.page.id_mission_team, this.props.page.smoke_received_team);
    }

    readIdExp(e) {
        this.props.setIdExpT(e.target.value);
    }

    readIdMis(e) {
        this.props.setIdMisT(e.target.value);
    }

    readSmkr(e) {
        this.props.setSmkrT(e.target.value);
    }






    render() {
        const {page, style} = this.props;
        return (
            <div style={style.style.doExperiment.genDiv}>
                <p>Adding information about experiment</p>
                <div>
                    <p>Enter id experiment</p>
                    <input maxLength={10} onChange={this.readIdExp} id={"id_exp_t"}/>
                </div>
                <div>
                    <p>Enter id mission</p>
                    <input maxLength={10} onChange={this.readIdMis} id={"id_mis_t"}/>
                </div>
                <div>
                    <p>Enter smoke received</p>
                    <input maxLength={10} onChange={this.readSmkr} id={"id_smkr_t"}/>
                </div>
                <div>
                    <Button label="Add" type={"submit"} onClick={this.addHuman}/>
                </div>
                <div>
                    Info: {page.infoAddExperiment}
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
        addExperiment: (id_e, id_m, smk) => dispatch(addExperiment(id_e, id_m, smk)),
        setIdExpT: (id) => dispatch(setIdExpT(id)),
        setIdMisT: (id) => dispatch(setIdMisT(id)),
        setSmkrT: (count) => dispatch(setSmkrT(count))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ExperimentForm)