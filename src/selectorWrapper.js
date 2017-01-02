import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import actions, * as jPlayerActions from "./actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => { return({
    ...state.jPlayer,
    ...ownProps
});}

const mapStateToPropsT = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => { debugger;return({
    ...jPlayers[selector],
    ...ownProps,
});}

const mapDispatchToProps = (dispatch) => ({jPlayer: bindActionCreators(jPlayerActions, dispatch)});

class SelectorWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.connectedPlayer = connect(mapStateToProps, mapDispatchToProps)(React.Children.only(this.props.children).type);
    }
    componentWillReceiveProps(nextProps) {
debugger;
        if (this.props.selector !== nextProps.jPlayers.currentSelector) {
            this.props.dispatch(actions.updateSelector(nextProps.selector))
        }    
    }
    componentWillMount() {
        this.props.dispatch(actions.updateSelector(this.props.selector))
    }
    render() {
        const ConnectedPlayer = this.connectedPlayer;
        return <ConnectedPlayer selector={this.props.selector} />
    }
}

export default connect(mapStateToPropsT)(SelectorWrapper);