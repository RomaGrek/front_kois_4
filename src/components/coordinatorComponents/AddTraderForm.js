import {connect} from "react-redux";
import React from "react";
import {Button} from "primereact/button";
import axios from "axios";
import {addTrader, setMagIdTrader} from "../../actions/pageActions";
import {logout} from "../../actions/userActions";


class AddTraderForm extends React.Component {
    constructor(props) {
        super(props);
        this.addTrader = this.addTrader.bind(this);
        this.c_readMagIdTr = this.c_readMagIdTr.bind(this);
    }

    addTrader() {
        this.props.addTrader(this.props.page.id_magician_trader);
    }

    c_readMagIdTr(e) {
        this.props.setMagIdTrader(e.target.value);
    }



    render() {
        const {page, style} = this.props;
        return (
            <div style={style.style.addTrader.genDiv}>
                <p>Adding trader</p>
                <div>
                    <p>Enter id magician</p>
                    <input maxLength={10} onChange={this.c_readMagIdTr} id={"id_mag_tra"}/>
                </div>
                <div>
                    <Button label="Add" type={"submit"} onClick={this.addTrader}/>
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
        addTrader: (id_m) => dispatch(addTrader(id_m)),
        setMagIdTrader: (id) => dispatch(setMagIdTrader(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddTraderForm)