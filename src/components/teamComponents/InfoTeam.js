import {connect} from "react-redux";
import React from "react";


class InfoTeam extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        const {status_team, style} = this.props;
        return (
            <div style={style.style.infoTeam.genDiv}>
                <p>Information about user</p>
                Type: Team<br/>
            </div>
        )
    }
}


const mapStateToProps = store => {
    return {
        page: store.page,
        style: store.style
    }
}

export default connect (mapStateToProps)(InfoTeam)