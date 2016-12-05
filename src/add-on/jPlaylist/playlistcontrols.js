import React from "react"

export default class extends React.Component {
    constructor(props) {
        super();

        this.state = {};
        this.className = {
            details: "jp-details",
            shuffle: "jp-shuffle",
            previous: "jp-previous",
            next: "jp-next",
            extraControls: "jp-extra-controls"
        };
    }
    _onShuffleClick = (event) => {
        event.preventDefault();

        this.props.shuffle(!this.props.shuffled);
        this.props.blur(event.target);
    }
    _onPreviousClick = (event) => {
        event.preventDefault();

        this.props.previous();
        this.props.blur(event.target);
    }
    _onNextClick = (event) => {
        event.preventDefault();

        this.props.next();
        this.props.blur(event.target);
    }
    render() {
        return (
            <div className="jp-playlist-controls">
                <a className={this.className.shuffle} onClick={this._onShuffleClick}>{this.props.html.shuffle}</a>
                <a className={this.className.previous} onClick={this._onPreviousClick}>{this.props.html.previous}</a>
                <a className={this.className.next} onClick={this._onNextClick}>{this.props.html.next}</a>
                <a className={this.className.extraControls}>{this.props.html.playlistOptions}</a>
            </div>
        );
    }
}