import React from "react";
import {Motion, spring} from "react-motion";

export default class extends React.Component {
    static get defaultProps() {
        return {
            minHeight: 0,
            maxHeight: 1
        };
    }
    constructor(props) {
        super(props);
        
        this.state = {};
        this.className = {
            currentMedia: "jp-playlist-current",
        };
    }
    _onRemoveMediaClick = (index, event) => {
        event.preventDefault();

        this.props.remove(index);
        this.props.blur(event.target);
    }
    _onMediaLinkClick = (index, event) => {
        event.preventDefault();

        this.props.current !== index ? this.props.play(index) : this.props.mergeOptions({status: {paused: false}});
        this.props.blur(event.target);
    }
    render() {
        return (
            <div>
            {this.props.medias.map((media, index) => {
                    const animationHeight = media.isRemoving ? this.props.minHeight : this.props.maxHeight;
                    const mediaListClass = this.props.current === index ? this.className.currentMedia : null;
                    const mediaLinkClass = this.props.current === index ? `${this.props.itemClass} ${this.className.currentMedia}` : this.props.itemClass        
                    const onRest = media.isRemoving ? () => this.props.onRest(index) : null;

                    return <Motion key={media.key} defaultStyle={{heightToInterpTo: this.props.minHeight}} style={{heightToInterpTo: spring(animationHeight, this.props.config)}} onRest={onRest}>                
                        {(values) => 
                            <li className={mediaListClass} style={{transform: `scaleY(${values.heightToInterpTo})`, transformOrigin: "50% top"}}>
                                {this.props.enableRemoveControls && <a href="javascript:;" className={this.props.removeItemClass} onClick={this._onRemoveMediaClick.bind(this, index)}>&times;</a>}
                                {media.free && <span className={this.props.freeGroupClass}>({media.freeMediaLinks})</span>}
                                <a href="javascript:;" className={mediaLinkClass} onClick={this._onMediaLinkClick.bind(this, index)} tabIndex="0"> 
                                    <img src={media.poster} />
                                    {media.title}
                                    {media.artist && <span className="jp-artist">by {media.artist}</span>}
                                </a>
                            </li>
                        }
                    </Motion>
                }
            )}
            </div>
        );
    }
}