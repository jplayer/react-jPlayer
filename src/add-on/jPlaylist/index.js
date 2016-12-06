import React from "react";
import {Motion, spring} from "react-motion";
import merge from "lodash.merge";
import maxBy from "lodash/maxBy";
import store from "../../store";
import * as actions from "../../jPlayer/actions";
import * as util from "../../util/index";
import media from "../../media";
import PlaylistControls from "./playlistControls";
import Playlist from "./playlist";
import PlaylistItem from "./playlistItem";
import {connect} from "react-redux";
import {formats, classNames, keys} from "../../util/constants";
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => {
	return {
		...state.jPlaylist
	}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default (WrappedComponent) => connect(mapStateToProps, mapDispatchToProps)(class extends React.Component {
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

        WrappedComponent = media(WrappedComponent, PlaylistControls);

        this.playlistContainerMinHeight = this.playlistItemAnimMinHeight = 0;
        this.playlistContainerMaxHeight = this.playlistItemAnimMaxHeight = 1;

        this.overrideMethods = {
            _updateButtons: (originalFunction) => function() {
                originalFunction.apply(this, arguments);
                const stateClassMethod = this.props.loop === "loop-playlist" ? this.addClass : this.removeClass;
                stateClassMethod(this.stateClass.loopedPlaylist, util.key.stateClass);
            }.bind(this)
        };

        this.state = {
            current: 0
        }

        this.event = {
            onEnded: () => { 
                this.next()
                this._trigger(this.props.onEnded);
            },
            onPlay: () => {
                actions.updateOthersOption(this.props.jPlayerSelector, true, "paused");
                this._trigger(this.props.onPlay);
             },
            onResize: () => {
                const method = this.props.fullScreen ? this.props.actions.removeFromArrayByValue : this.props.actions.addUniqueToArrayByValue;

                method(keys.DETAILS_CLASS, classNames.HIDDEN, this.props[keys.DETAILS_CLASS]);
                this._trigger(this.props.onResize);
            }
        }
       
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
            // Check the property is a media format
            if (formats[property]){
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
             this.props.actions.addUniqueToArrayByValue(keys.DETAILS_CLASS, classNames.HIDDEN);
        }

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
        this.props.actions.updateOption("shuffled", false);
        this.original = merge([], playlist); // Copy the Array of Objects

        for(var i = 0; i < this.original.length; i++) {
            this.original[i].key = i;          
            this._addFreeMediaLinks(this.original[i]);
        }

        this._originalPlaylist();
    }
    _originalPlaylist = () => this.props.actions.updateOption("playlist", this.original)
    setPlaylist = (playlist) => {
        this._initPlaylist(playlist);
        this._init();
    }
    add = (media, playNow) => {
        this._addFreeMediaLinks(media);
        media.key = maxBy(this.props.playlist, "key").key + 1;
        
        this.original.push(media);
        this.props.actions.addUniqueToArrayByValue(keys.PLAYLIST_CLASS, media);

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
            this.props.actions.updateOption("playlist", []);     
            return true;
        } else {         
            const playlist = merge([], [...this.props.playlist]);
            playlist[index].isRemoving = true;

            this.props.actions.updateOption("playlist", playlist);
        }
        this.setState({useRemoveConfig: true});
    }
    select = (index) => {
        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.props.playlist.length) {
            this.setState({current: index});
            this.props.actions.updateOption("playlist", this.props.playlist[index]);
        } else {
            this.setState({current: 0});
        }
    }
    play = (index) => {
        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.props.playlist.length) {
            if (this.props.playlist.length) {
                this.select(index, true);
                this.props.actions.updateOption("paused", false);
            }
        } else if (index === undefined) {
            this.props.actions.updateOption("paused", false);
        }
    }
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
        this.props.actions.updateOption("shuffled", shuffled);      
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
        this.props.actions.removeFromArrayByIndex(keys.PLAYLIST_CLASS, index);

        if (this.original.length) {
            if (index === this.state.current) {
                this.state.current = (index < this.original.length) ? this.state.current : this.original.length - 1; // To cope when last element being selected when it was removed
                this.select(this.state.current);
            } else if (index < this.state.current) {
                this.setState(previousState => [{current: previousState.current--}]);
            }
        } else {
            this.setState({current: 0});
            this.props.actions.updateOption("playlist", []);
            this.props.actions.updateOption("shuffled", false);
        }

        this.setState({useRemoveConfig: false});
    }
    _shuffleAnimationCallback = () => {
        if (!this.state.isPlaylistContainerSlidingUp) {
            this.setState({useShuffleConfig: false});
            return;
        }

        if (this.props.shuffled) {
            this.props.actions.updateOption("playlist", [...this.props.playlist].sort(() => 0.5 - Math.random()));
            this.props.actions.addUniqueToArrayByValue(keys.JPLAYER_CLASS, this.stateClass.shuffled);
        } else {
            this._originalPlaylist(playlistSetCallback);
            this.props.actions.removeFromArrayByValue(keys.JPLAYER_CLASS, this.stateClass.shuffled);
        }
        if (this.playNow || !this.props.paused) {
            this.play(0);
        } else {
            this.select(0);
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
            <WrappedComponent {...this.props} {...this.keyBindings} {...this.event} stateClass={this.stateClass} loopOptions={"loop-playlist"}
                additionalControlProps={playlistControlProps} overrideMethods={this.overrideMethods}>            
                <div id="jp_container_playlist">
                    <div className="jp-playlist">
                        <Playlist isSlidingUp={this.state.isPlaylistContainerSlidingUp} config={this.state.useShuffleConfig ? this.props.shuffleAnimation : this.props.displayAnimation} onRest={this._shuffleAnimationCallback}>
                            <PlaylistItem medias={this.props.playlist} current={this.state.current} config={MediaAnimationConfig} onRest={this._removeAnimationCallback} 
                                removeItemClass={this.props.removeItemClass} freeGroupClass={this.props.freeGroupClass} itemClass={this.props.itemClass} enableRemoveControls={this.props.enableRemoveControls} 
                                remove={this.remove} blur={this.blur} play={this.play} mergeOptions={this.mergeOptions} />
                        </Playlist> 
                    </div>
                </div>                               
                {this.props.children}
            </WrappedComponent>
        );
    }
})