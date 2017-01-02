import React from "react";
import {connect} from "react-redux";

import {classNames} from "../util/constants";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => {return({
    title: jPlayers[selector].media.title,
    attributes: ownProps
});}

//const Title = ({title, attributes}) => {debugger; return <div className={classNames.TITLE} {...attributes}>{title}</div>; }
class Title extends React.Component {
    componentWillReceiveProps(nextProps) {
debugger;
    }
    render() {
        return <div className={classNames.TITLE} {...this.props.attributes}>{this.props.title}</div>; 
    }
}

export default connect(mapStateToProps)(Title);