import React from "react";
import {connect} from 'react-redux';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {
    getListAreaTeam,
    getTable,
    sendPoint,
    setMessageR,
    setMessageX,
    setMessageY,
    setR,
    setX,
    setY
} from "../../actions/pageActions";
import {Checkbox} from "primereact/checkbox";
import {logout} from "../../actions/userActions";

class AreaTable extends React.Component{
    constructor(props){
        super(props);
        this.goFuckingBack = this.goFuckingBack.bind(this);
        this.setOffX = this.setOffX.bind(this);
    }





    goFuckingBack(e){
        this.props.logout()
    }

    setOffX(){
        this.setState({
            cbm3: false,
            cbm2: false,
            cbm1: false,
            cb0: false,
            cb1: false,
            cb2: false,
            cb3: false,
            cb4: false,
            cb5: false,
        })
    }

    render() {
        const {page, area_table, style} = this.props;
        return(
            <div className="form" width={ page.pageWidth} style={style.style.formView.block}>
                <p>Доступные районы команды</p>
                <div className="result" style={style.style.result.block}>
                    {/*<ScrollPanel>*/}
                    <table width="90%" id="result" style={style.style.result.block}>
                        <thead>
                        <tr>
                            <th  style={style.style.result.header}>ID</th>
                            <th style={style.style.result.header}>Level</th>
                        </tr>
                        </thead>

                        <tbody>
                        {area_table.map((item) => (
                            <tr
                                // key={this.state.key}
                            >
                                <td>
                                    {/*тут скорее всего поля которые называются как на сприге*/}
                                    {item.id}
                                </td>
                                <td>
                                    {item.level}
                                </td>
                            </tr>
                        ))}
                        {/*{this.fuck()}*/}
                        </tbody>
                    </table>
                    {/*</ScrollPanel>*/}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return{
        page: store.page,
        style: store.style
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(AreaTable)