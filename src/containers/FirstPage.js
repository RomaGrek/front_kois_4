import React,{Component} from "react";
import {connect} from 'react-redux';
import {Header} from "../components/otherComponents/Header";
import {Clock} from "../components/Clock";
import Login from "./Login";
import {Sign} from "../components/otherComponents/Sign";
import {Redirect} from "react-router";

class FirstPage extends Component{

    render() {
        const {header,style,page,user} = this.props;
        return(
            <div className="firstPage">
                {user.statusUser !== null && user.statusUser !== 2 && user.statusUser !== 3 && <Redirect to={"/coordinator"}/>}
                {user.statusUser !== null && user.statusUser !== 1 && user.statusUser !== 3 && <Redirect to={"/team"}/>}
                {user.statusUser !== null && user.statusUser !== 2 && user.statusUser !== 1 && <Redirect to={"/trader"}/>}
                <Header
                    topic={header.topic}
                    firstName={header.firstName}
                    secondName={header.secondName}
                    variant={header.variant}
                    style={style}/>
                <Clock canvasSize={page.clockSiz3} style={style}/>
                <Login style={style}/>
                <Sign style={style} />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        header: store.header,
        user: store.user,
        style: store.style,
        page: store.page
    }
};

export default connect(mapStateToProps)(FirstPage)
