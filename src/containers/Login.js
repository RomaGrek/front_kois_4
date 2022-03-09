import React from "react";
import {connect} from 'react-redux';
import {Button} from "primereact/button";
import {Password} from 'primereact/password';
import {InputText} from "primereact/inputtext";
import {login, registration, setAnswer, setLogin, setTrader, setCor, setTeam} from "../actions/userActions";
import {RadioButton} from "primereact/radiobutton";

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.props.setAnswer("");
        this.justLogin = this.justLogin.bind(this);
        this.c_readTrader = this.c_readTrader.bind(this);
        this.c_readTeam = this.c_readTeam.bind(this);
        this.c_readCor = this.c_readCor.bind(this);
    }

    justLogin(e){
        this.props.setAnswer("");
        let login = document.getElementById("login").value.trim();
        if (login === null || login === ""){
            this.props.setAnswer("Please, write your login.")
        }else{
            if (this.props.user.coordinator === 1 && this.props.user.trader === null && this.props.user.team === null) {
                this.props.login(login, "1");
                this.props.user.coordinator = null;
                this.props.user.trader = null;
                this.props.user.team = null;

            }else if(this.props.user.coordinator === null && this.props.user.trader === 1 && this.props.user.team === null) {
                this.props.login(login, "3");
                this.props.user.coordinator = null;
                this.props.user.trader = null;
                this.props.user.team = null;
            }else if (this.props.user.coordinator === null && this.props.user.trader === null && this.props.user.team === 1) {
                this.props.login(login, "2");
                this.props.user.coordinator = null;
                this.props.user.trader = null;
                this.props.user.team = null;
            }
            console.log(this.props.user.coordinator);
            console.log(this.props.user.team);
            console.log(this.props.user.trader);
        }
    }


    c_readCor(e) {
        this.props.setCor(1);
        this.props.setTrader(null);
        this.props.setTeam(null);
    }

    c_readTeam(e) {
        this.props.setCor(null);
        this.props.setTrader(null);
        this.props.setTeam(1);
    }

    c_readTrader(e) {
        this.props.setCor(null);
        this.props.setTrader(1);
        this.props.setTeam(null);
    }

    render() {
        const {style, user} = this.props;
        return(
            <div style={style.style.loginField.align}>
                {/*<RadioButton value={"Coordinator"} id={"coordinator"}/>*/}
                {/*<RadioButton value={"Team"} id={"team"}/> Team*/}
                {/*<RadioButton value={"Trader"} id={"trader"}/> Trader*/}
                <input type={"radio"} value={"1"} onClick={this.c_readCor}/><p style={style.style.loginField.align.cor}>Coordinator</p>
                <input type={"radio"} value={"2"} onClick={ this.c_readTeam}/><p style={style.style.loginField.align.team}>Team</p>
                <input type={"radio"} value={"3"} onClick={this.c_readTrader}/><p style={style.style.loginField.align.trader}>Trader</p>

                <br/>
                <InputText placeholder=" Login" style={style.style.loginField.login} maxLength={20} id={"login"}/>
                <br/>
                <br/>
                {/*<Password placeholder=" Password" maxLength={10} id={"password"} style={style.style.loginField.register}/>*/}
                {/*<div className={"userAnswer"} style={style.style.loginField.userAnswer}>*/}
                {/*    {user.userAnswer === "" ? <br/> : user.userAnswer}*/}
                {/*</div>*/}
                <p style={style.style.infffo}>{this.props.user.userAnswer}</p>
                <table width="100%" style={style.style.loginField.tableBut}>
                    <tr>
                        <td width='50%'>
                            <Button label="Login" style={style.style.loginField.loginButton}  onClick={this.justLogin}/>
                        </td>
                        {/*<td width='50%'>*/}
                        {/*    <Button label="Register" style={style.style.loginField.registerButton} onClick={this.justRegister}/>*/}
                        {/*</td>*/}
                    </tr>
                </table>
            </div>
        )
    }
}

const mapStateToProps = store =>{
    return{
        user: store.user,
        style: store.style
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        setLogin: info => dispatch(setLogin(info)),
        setAnswer: userAnswer => dispatch(setAnswer(userAnswer)),
        registration: butch => dispatch(registration(butch)),
        login: (butch, d) => dispatch(login(butch, d)),
        setCor: (code) => dispatch(setCor(code)),
        setTeam: (code) => dispatch(setTeam(code)),
        setTrader: (code) => dispatch(setTrader(code))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
