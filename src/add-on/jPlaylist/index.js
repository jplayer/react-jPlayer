import React from "react";
import {Motion, spring} from "react-motion";
import merge from "lodash.merge";
import maxBy from "lodash/maxBy";
import jPlayer from "../../jPlayer/index";
import store from "../../store";
import * as actions from "./actions";
import * as jPlayerActions from "../../jPlayer/actions";
import * as util from "../../util/index";

const jPlaylist = (WrappedComponent) => class JPlaylist extends React.Component {
    static get propTypes() {
		return {
            updateOptions: React.PropTypes.func.isRequired,
            playlist: React.PropTypes.arrayOf(
                 React.PropTypes.shape({
                    title: React.PropTypes.string,
                    artist: React.PropTypes.string,
                    mp3: React.PropTypes.string,
                    poster: React.PropTypes.string,
                    free: React.PropTypes.bool,
                })
            ),
            enableRemoveControls: React.PropTypes.bool,
            shuffleOnLoop: React.PropTypes.bool,
            itemClass: React.PropTypes.string,
            freeItemClass: React.PropTypes.string,
            removeItemClass: React.PropTypes.string,
            freeGroupClass: React.PropTypes.string
        }
	}
    static get defaultProps() {
		return {
            functions: [],
            html: {},
            playlist: [],
            shuffleOnLoop: true,
            shuffled: false,
            itemClass: "jp-playlist-item",
            freeItemClass: "jp-playlist-item-free",
            removeItemClass: "jp-playlist-item-remove",
            freeGroupClass: "jp-free-media",
        };
    }
    constructor(props) {
        super(props);

        WrappedComponent = jPlayer(WrappedComponent, PlaylistControls);

        this.playlistContainerMinHeight = this.playlistItemAnimMinHeight = 0;
        this.playlistContainerMaxHeight = this.playlistItemAnimMaxHeight = 1;

        this.assignOptions = util.assignOptions.bind(this);
		this.mergeOptions = util.mergeOptions.bind(this);
		this.modifyOptionsArray = util.modifyOptionsArray.bind(this);
		this.addClass = util.addClass.bind(this);
		this.removeClass = util.removeClass.bind(this);
		this.assignStyle = util.assignStyle.bind(this);

        this.state = {
            current: 0
        }

        this.event = {
            onEnded: () => { 
                this.next()
                this._trigger(this.props.onEnded);
            },
            onPlay: () => { 
                jPlayerActions.updateOthersOption(this.props.jPlayerSelector, true, "paused");
                this._trigger(this.props.onPlay);
             },
            onResize: () => {
                this.props.fullScreen ? this._showDetails() : this._hideDetails();
                this._trigger(this.props.onResize);
            }
        }
        
        this.key = {
            playlist: "playlist",
            detailsClass: "detailsClass",
            shuffleOffClass: "shuffleOffClass"
        };
       
        //Add a new stateClass for the extra loop option
        this.stateClass = merge({
            shuffled: "jp-state-shuffled", 
            loopedPlaylist: "jp-state-loop-playlist"
        }, this.props.stateClass);   

        this.keyBindings = merge({
            next: {
                key: 221, // ]
                fn: () => this.next()
            },
            previous: {
                key: 219, // [
                fn: () => this.previous()
            },
            shuffle: {
                key: 83, // s
                fn: () => this.shuffle()
            }
        }, this.props.keyBindings);

        this.freeMediaLinkIndex = 0;
    }
    _hideDetails = () => this.addClass(util.className.hidden, this.key.detailsClass)
    _showDetails = () => this.removeClass(util.className.hidden, this.key.detailsClass)
    _trigger = (func, jPlayer) => {
        if (func !== undefined) {
            func.bind(this)(jPlayer);
        }
    }
    _addFreeMediaLinks = (media) => {
        if (!media.free) return;
        
        var firstMediaLinkAdded = true;

        media.freeMediaLinks = [];

        for (var property in media) {        
            // Check property is a media format
            if (util.format[property]){
                var value = media[property];

                firstMediaLinkAdded ? firstMediaLinkAdded = false : media.freeMediaLinks.push(", ");
                media.freeMediaLinks.push(<a key={this.freeMediaLinkIndex++} className={this.props.freeItemClass} href={value} tabIndex="-1">{property}</a>);
            }
       }
    }
    _setup = () => {
        this.cssSelector = Object.assign({}, {cssPlaylistOptionsSelector: this.state.cssSelectorAncestor}, this.state.cssSelector);

        // Put the title in its initial display state
        if (!this.props.fullScreen) {
            this._hideDetails();
        }

        const newUpdateButtonCallback = (originalFunction) => {
            return function() {
                originalFunction.apply(this, arguments);
                const stateClassMethod = this.props.loop === "loop-playlist" ? this.addClass : this.removeClass;
                stateClassMethod(this.stateClass.loopedPlaylist, util.key.stateClass);
            }.bind(this);
        };
        this.jPlayer._updateButtons = newUpdateButtonCallback(this.jPlayer._updateButtons);

        this._init();
    }
    _init = () => {
        if (this.props.autoPlay) {
            this.play(this.state.current);
        } else {
            this.select(this.state.current);
        }
    }
    _initPlaylist = (playlist) => {
        this.setState({current: 0});
        this.assignOptions({shuffled: false});
        this.original = [...playlist] // Copy the Array of Objects

        for(var i = 0; i < this.original.length; i++){
            this.original[i].key = i;          
            this._addFreeMediaLinks(this.original[i]);
        }

        this._originalPlaylist();
    }
    _originalPlaylist = (playlistSetCallback) => this.assignOptions({playlist: [...this.original]}, playlistSetCallback)
    setPlaylist = (playlist) => {
        this._initPlaylist(playlist);
        this._init();
    }
    add = (media, playNow) => {
        this._addFreeMediaLinks(media);
        media.key = maxBy(this.props.playlist, "key").key + 1;
        
        this.original.push(media);
        this.modifyOptionsArray(media, Array.prototype.concat, this.key.playlist);

        if (playNow) {
            this.play(this.props.playlist.length - 1);
        } else {
            if (this.original.length === 1) {
                this.select(0);
            }
        }
    }
    remove = (index) => {
        if (index === undefined) {
            this._initPlaylist([]);
            this.mergeOptions({status: {media: []}});
            return true;
        } else {           
            this.mergeOptions({playlist: {[index]: {isRemoving: true}}});
        }
        this.setState({useRemoveConfig: true});
    }
    select = (index, autoPlay) => {
        const playCallback = autoPlay ? () => this.mergeOptions({status: {paused: false}}) : null;

        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.props.playlist.length) {
            this.setState({current: index});
            this.mergeOptions({status: {media: this.props.playlist[index]}}, playCallback);
        } else {
            this.setState({current: 0});
        }
    }
    play = (index) => {
        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.props.playlist.length) {
            if (this.props.playlist.length) {
                this.select(index, true);
            }
        } else if (index === undefined) {
            this.mergeOptions({status: {paused: false}});
        }
    }
    pause = () => this.mergeOptions({status: {paused: true}});
    next = () => {
        var index = (this.state.current + 1 < this.props.playlist.length) ? this.state.current + 1 : 0;

        if (this.props.loop === "loop") {
            this.play(this.state.current);
        }
        if (this.props.loop === "loop-playlist") {
            // See if we need to shuffle before looping to start, and only shuffle if more than 1 item.
            if (index === 0 && this.props.shuffled && this.props.shuffleOnLoop && this.props.playlist.length > 1) {
                this.shuffle(true, true); // playNow
            } else {
                this.play(index);
            }
        }
        else {
            // The index will be zero if it just looped round
            if (index > 0) {
                this.play(index);
            }
        }
    }
    previous = () => {
        var index = (this.state.current - 1 >= 0) ? this.state.current - 1 : this.props.playlist.length - 1;

        if (this.props.loop === "loop-playlist" && this.props.loopOnPrevious || index < this.props.playlist.length - 1) {
            this.play(index);
        }
    }
    shuffle = (shuffled, playNow) => {
        if(shuffled === undefined) {
            shuffled = !this.props.shuffled;
        }

        this.playNow = playNow;
        this.assignOptions({shuffled: shuffled});      
        this.setState({isPlaylistContainerSlidingUp: true});
        this.setState({useShuffleConfig: true});
    }
    _removeAnimationCallback = (index) => {
        if (this.props.shuffled) {
            var item = this.props.playlist[index];
            for (var i = 0; i < this.original.length; i++){
                if (this.original[i].key === item.key) {
                    this.original.splice(i, 1);
                    break;
                }
            }
        } else {
            this.original.splice(index, 1);
        }
        this.modifyOptionsArray(function(_, i) {return i !== index}, Array.prototype.filter, this.key.playlist);

        if (this.original.length) {
            if (index === this.state.current) {
                this.state.current = (index < this.original.length) ? this.state.current : this.original.length - 1; // To cope when last element being selected when it was removed
                this.select(this.state.current);
            } else if (index < this.state.current) {
                this.setState(previousState => [{current: previousState.current--}]);
            }
        } else {
            this.mergeOptions({status: {media: []}});
            this.setState({current: 0});
            this.assignOptions({shuffled: false});;
        }

        this.setState({useRemoveConfig: false});
    }
    _shuffleAnimationCallback = () => {
        if (!this.state.isPlaylistContainerSlidingUp) {
            this.setState({useShuffleConfig: false});
            return;
        }

         var playlistSetCallback = () => { 
            if (this.playNow || !this.props.status.paused) {
                this.play(0);
            } else {
                this.select(0);
            }
        }

        if (this.props.shuffled) {
            this.assignOptions({playlist: [...this.props.playlist].sort(() => 0.5 - Math.random())});
            this.addClass(this.stateClass.shuffled, util.key.stateClass, playlistSetCallback);
        } else {
            this._originalPlaylist(playlistSetCallback);
            this.removeClass(this.stateClass.shuffled, util.key.stateClass);
        }
        
        setTimeout(() => this.setState({isPlaylistContainerSlidingUp: false}), 0);
    }
    blur = (that) => {
        if (this.props.autoBlur) {
            that.blur();
        }
    }
    componentWillMount() { 
        this._initPlaylist(this.props.playlist);     
        // store.on("jPlayerChange", () => {
        //     if (store.identifier !== this.props.jPlayerSelector) {
        //         this.mergeOptions({status: {paused: store.paused}});
        //     }
        // });
    }
    componentDidMount() {
        this._setup();
    }
    render() {
        const MediaAnimationConfig = this.state.useRemoveConfig ? this.props.removeAnimation : this.props.addAnimation
        const playlistControlProps = {
            blur: this.blur,
            shuffle: this.shuffle,
            next: this.next,
            previous: this.previous,
            html: this.props.html,
            shuffled: this.props.shuffled
        };

        return (   
            <WrappedComponent ref={(jPlayer) => this.jPlayer = jPlayer} {...this.props} {...this.keyBindings} {...this.event} stateClass={this.stateClass} loopOptions={"loop-playlist"}
                additionalControlProps={playlistControlProps}>            
                <div id="jp_container_playlist">
                    <div className="jp-playlist">
                        <Playlist isSlidingUp={this.state.isPlaylistContainerSlidingUp} config={this.state.useShuffleConfig ? this.props.shuffleAnimation : this.props.displayAnimation} onRest={this._shuffleAnimationCallback}>
                            <Media medias={this.props.playlist} current={this.state.current} config={MediaAnimationConfig} onRest={this._removeAnimationCallback} 
                                removeItemClass={this.props.removeItemClass} freeGroupClass={this.props.freeGroupClass} itemClass={this.props.itemClass} enableRemoveControls={this.props.enableRemoveControls} 
                                remove={this.remove} blur={this.blur} play={this.play} mergeOptions={this.mergeOptions} />
                        </Playlist> 
                    </div>
                </div>                               
                {this.props.children}
            </WrappedComponent>
        );
    }
}

class PlaylistControls extends React.Component {
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

class Media extends React.Component {
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

const Playlist = (props) => {
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

Playlist.defaultProps = {
    minHeight: 0,
    maxHeight: 1
};

Playlist.propTypes = {
    children: React.PropTypes.element.isRequired
}

export default jPlaylist;