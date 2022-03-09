import {connect} from "react-redux";
import React from "react";
import {Button} from "primereact/button";
import axios from "axios";
import {endMission, setEndTimeM} from "../../actions/pageActions";
import {logout} from "../../actions/userActions";


class EndMissionForm extends React.Component {
    constructor(props) {
        super(props);
        this.c_endMis = this.c_endMis.bind(this);
        this.c_readMisEnd = this.c_readMisEnd.bind(this);
    }

    c_endMis() {
        this.props.endMission(this.props.page.id_mission_end);
    }

    c_readMisEnd(e) {
        this.props.setEndTimeM(e.target.value);
    }



    render() {
        const {page, style} = this.props;
        return (
            <div style={style.style.endMis.genDiv}>
                <p>Ending mission</p>
                <div>
                    <p>Enter id mission</p>
                    <input maxLength={10} onChange={this.c_readMisEnd} id={"id_m_end"}/>
                </div>
                <div>
                    <Button label="Add" type={"submit"} onClick={this.c_endMis}/>
                </div>
                <div>
                    Info: {page.infoEndMission}
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
        endMission: (id_t) => dispatch(endMission(id_t)),
        setEndTimeM: (id) => dispatch(setEndTimeM(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(EndMissionForm)