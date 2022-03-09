import {connect} from "react-redux";
import React from "react";
import {Button} from "primereact/button";
import axios from "axios";
import {
    getTable,
    setMessageR,
    setMessageX,
    setMessageY,
    addExperiment,
    addHumanInExperiment,
    setIdHunT,
    setIdExpHumT
} from "../../actions/pageActions";
import {logout} from "../../actions/userActions";


class HumanExperimentForm extends React.Component {
    constructor(props) {
        super(props);
        this.addHumanInExp = this.addHumanInExp.bind(this);
        this.readIdExpHumT = this.readIdExpHumT.bind(this);
        this.readIdHumanT = this.readIdHumanT.bind(this);
    }

    addHumanInExp() {
        this.props.addHumanInExperiment(this.props.page.id_human_team, this.props.page.id_experiment_human_team);
    }

    readIdHumanT(e) {
        this.props.setIdHunT(e.target.value);
    }

    readIdExpHumT(e) {
        this.props.setIdExpHumT(e.target.value);
    }





    render() {
        const {page, style} = this.props;
        return (
            <div style={style.style.experimentHuman.genDiv}>
                <p>Adding human participation to the experiment</p>
                <div>
                    <p>Enter id human</p>
                    <input maxLength={10} onChange={this.readIdHumanT}/>
                </div>
                <div>
                    <p>Enter id experiment which human was</p>
                    <input maxLength={10} onChange={this.readIdExpHumT}/>
                </div>
                <div>
                    <Button label="Add" type={"submit"} onClick={this.addHumanInExp}/>
                </div>
                <div>
                    Info: {page.infoAddHumanInExp}
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
        addHumanInExperiment: (id_h, id_e_h) => dispatch(addHumanInExperiment(id_h, id_e_h)),
        setIdHunT: (id) => dispatch(setIdHunT(id)),
        setIdExpHumT: (id) => dispatch(setIdExpHumT(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(HumanExperimentForm)