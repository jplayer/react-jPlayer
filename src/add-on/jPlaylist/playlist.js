import React from "react";

export default class extends React.Component {
    static get defaultProps() {
        return {
   
        };
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (

        );
    }
}
const playlist = (props) => {
    const animationHeight = props.isSlidingUp ? props.minHeight : props.maxHeight;

    return (
        <Motion defaultStyle={{heightToInterpTo: props.minHeight}} style={{heightToInterpTo: spring(animationHeight, props.config)}} onRest={props.onRest}>
            {(values) =>
                <ul style={{transform: `scaleY(${values.heightToInterpTo})`, transformOrigin: "50% top"}}>
                    {props.children}     
                </ul>
            }
        </Motion>   
    );
};

playlist.defaultProps = {
    minHeight: 0,
    maxHeight: 1
};

playlist.propTypes = {
    children: React.PropTypes.element.isRequired
}

export default playlist;