import {connect} from "react-redux";
import React from "react";
import {Button} from "primereact/button";
import axios from "axios";
import {doDeal, setIdDeal, setIdExe, setIdBuy, setIdSel} from "../../actions/pageActions";
import {logout} from "../../actions/userActions";


class DealForm extends React.Component {
    constructor(props) {
        super(props);
        this.doDealdo = this.doDealdo.bind(this);
        this.readIdDeal = this.readIdDeal.bind(this);
        this.readIdExe = this.readIdExe.bind(this);
        this.readIdSel = this.readIdSel.bind(this);
        this.readIdBuy = this.readIdBuy.bind(this);
    }

    doDealdo(){
        this.props.doDeal(this.props.page.id_deal_trader, this.props.page.id_exemplar_trader, this.props.page.id_buyer_trader, this.props.page.id_seller_trader);
    }

    readIdDeal(e) {
        this.props.setIdDeal(e.target.value);
    }

    readIdExe(e) {
        this.props.setIdExe(e.target.value);
    }

    readIdBuy(e) {
        this.props.setIdBuy(e.target.value);
    }

    readIdSel(e) {
        this.props.setIdSel(e.target.value);
    }






    render() {
        const {page, style} = this.props;
        return (
            <div style={style.style.doDeal.genDiv}>
                <p>Do deal</p>
                <div>
                    <p>Enter id deal</p>
                    <input maxLength={10} onChange={this.readIdDeal} id={"id_d"}/>
                </div>
                <div>
                    <p>Enter id exemplar</p>
                    <input maxLength={10} onChange={this.readIdExe} id={"id_e"}/>
                </div>
                <div>
                    <p>Enter id buyer</p>
                    <input maxLength={10} onChange={this.readIdBuy} id={"id_b"}/>
                </div>
                <div>
                    <p>Enter id seller</p>
                    <input maxLength={10} onChange={this.readIdSel} id={"id_s"}/>
                </div>
                <div>
                    <Button label="Add" type={"submit"} onClick={this.doDealdo}/>
                </div>
                <div>
                    Info: {page.infoDoDeal}
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
        doDeal: (id_d, id_ex, id_b, id_s) => dispatch(doDeal(id_d, id_ex, id_b, id_s)),
        setIdDeal: (id) => dispatch(setIdDeal(id)),
        setIdExe: (id) => dispatch(setIdExe(id)),
        setIdBuy: (id) => dispatch(setIdBuy(id)),
        setIdSel: (id) => dispatch(setIdSel(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(DealForm)