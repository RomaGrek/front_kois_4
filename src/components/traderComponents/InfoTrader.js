import {connect} from "react-redux";
import React from "react";


class InfoTrader extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        const {page, inventory_table, style} = this.props;
        return (
            <div style={style.style.infoTrader.genDiv}>
                <p>Information about user</p>

                Busy slots in inventory: {inventory_table.length}
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

export default connect (mapStateToProps)(InfoTrader)