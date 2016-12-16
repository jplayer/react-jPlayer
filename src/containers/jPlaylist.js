import React from "react";
import merge from "lodash.merge";
import maxBy from "lodash/maxBy";
import store from "../store";
import * as actions from "../actions/jPlayerActions";
import * as util from "../util/index";
import * as constants from "../util/constants";
import Playlist from "../components/playlist";
import PlaylistItem from "../components/playlistItem";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import JPlayer from "./jPlayer";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.jPlaylist,
        html: state.jPlayer.html,
        fullScreen: state.jPlayer.fullScreen,
        autoPlay: state.jPlayer.autoPlay,
        loop: state.jPlayer.loop,
        paused: state.jPlayer.paused,
        autoBlur: state.jPlayer.autoBlur,
        controls: state.jPlayer.controls
    };
};
const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));

export default WrappedComponent => connect(mapStateToProps, mapDispatchToProps)(
    class JPlaylist extends React.Component {
        constructor(props, context) {
            super(props, context);

            this.state = {
                current: 0
            }
            
            // WrappedComponent = JPlayer(WrappedComponent, <PlaylistControls {...jPlaylistOptions.controls} _onShuffleClick={this._onShuffleClick} _onPreviousClick={this._onPreviousClick} 
            // _onNextClick={this._onNextClick} html={this.props.html} />)

            // this.playlistContainerMinHeight = this.playlistItemAnimMinHeight = 0;
            // this.playlistContainerMaxHeight = this.playlistItemAnimMaxHeight = 1;

            this.props.updateOption("onEnded", () => {
                this.next()
               // this._trigger(this.props.onEnded)
            });

            this.props.updateOption("onPlay", () => {
                //actions.updateOthersOption(this.props.jPlayerSelector, true, "paused");
               // this._trigger(this.props.onPlay);
            });

            this.props.updateOption("onResize", () => {
                const method = this.props.fullScreen ? this.props.removeFromArrayByValue : this.props.addUniqueToArray;

                method(constants.keys.DETAILS_CLASS, constants.classNames.HIDDEN);
               // this._trigger(this.props.onResize);
            });

            //Add a new stateClass for the extra loop option
            this.props.updateOption("stateClass", merge({
                shuffled: "jp-state-shuffled", 
                loopedPlaylist: "jp-state-loop-playlist"
            }, this.props.stateClass));
            
            this.props.updateOption("keyBindings", merge({
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
            }, this.props.keyBindings));

            this.freeMediaLinkIndex = 0;

            // Put the title in its initial display state
            if (!this.props.fullScreen) {
                this.props.addUniqueToArray(constants.keys.DETAILS_CLASS, constants.classNames.HIDDEN);
            }
        }
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
        static get contextTypes() {
            return {
                setMedia: React.PropTypes.func,
                play: React.PropTypes.func
            }
        }
        static get childContextTypes() {
            return {
                play: React.PropTypes.func,
                add: React.PropTypes.func,
                remove: React.PropTypes.func,
                select: React.PropTypes.func,
                next: React.PropTypes.func,
                previous: React.PropTypes.func,
                shuffle: React.PropTypes.func,
                blur: React.PropTypes.func
            }
        }
        getChildContext = () => ({
            play: this.play,
            add: this.add,
            remove: this.remove,
            select: this.select,
            next: this.next,
            previous: this.previous,
            shuffle: this.shuffle,
            blur: this.blur
        })
        _addFreeMediaLinks = (media) => {
            if (!media.free) return;
            
            var firstMediaLinkAdded = true;

            media.freeMediaLinks = [];

            for (var property in media) {
                // Check the property is a media format
                if (constants.formats[property]){
                    var value = media[property];

                    firstMediaLinkAdded ? firstMediaLinkAdded = false : media.freeMediaLinks.push(", ");
                    media.freeMediaLinks.push(<a key={this.freeMediaLinkIndex++} className={this.props.freeItemClass} href={value} tabIndex="-1">{property}</a>);
                }
            }
        }
        _init = () => {
            if (this.props.autoPlay) {
                this.play(this.props.current);
            } else {
                this.select(this.props.current);
            }
        }
        _initPlaylist = (playlist) => {
            this.props.updateOption("current", 0);
            this.props.updateOption("shuffled", false);
            this.original = merge([], playlist); // Copy the Array of Objects

            for(var i = 0; i < this.original.length; i++) {
                this.original[i].key = i;          
                this._addFreeMediaLinks(this.original[i]);
            }

            this._originalPlaylist();
        }
        _originalPlaylist = () => this.props.updateOption("playlist", this.original)
        setPlaylist = (playlist) => {
            this._initPlaylist(playlist);
            this._init();
        }
        add = (media, playNow) => {
            this._addFreeMediaLinks(media);
            media.key = maxBy(this.props.playlist, "key").key + 1;
            
            this.original.push(media);
            this.props.addUniqueToArray(constants.keys.PLAYLIST_CLASS, media);

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
                this.context.clearMedia();
                return true;
            } else {         
                const playlist = merge([], [...this.props.playlist]);
                playlist[index].isRemoving = true;

                this.context.setMedia(playlist);
            }
            this.setState({useRemoveConfig: true});
        }
        select = (index) => {
            index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
            if (0 <= index && index < this.props.playlist.length) {
                this.props.updateOption("current", index);
                this.context.setMedia(this.props.playlist[index]);
            } else {
                this.props.updateOption("current", 0);
            }
        }
        play = (index) => {
            index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
            if (0 <= index && index < this.props.playlist.length) {
                if (this.props.playlist.length) {
                    this.select(index, true);
                    this.context.play();
                }
            } else if (index === undefined) {
                this.context.play();
            }
        }
        next = () => {
            var index = (this.props.current + 1 < this.props.playlist.length) ? this.props.current + 1 : 0;

            if (this.props.loop === "loop") {
                this.play(this.props.current);
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
            var index = (this.props.current - 1 >= 0) ? this.props.current - 1 : this.props.playlist.length - 1;

            if (this.props.loop === "loop-playlist" && this.props.loopOnPrevious || index < this.props.playlist.length - 1) {
                this.play(index);
            }
        }
        shuffle = (shuffled, playNow) => {
            if(shuffled === undefined) {
                shuffled = !this.props.shuffled;
            }

            this.playNow = playNow;
            this.props.updateOption("shuffled", shuffled);
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
            this.props.removeFromArrayByIndex(constants.keys.PLAYLIST_CLASS, index);

            if (this.original.length) {
                if (index === this.props.current) {
                    this.props.current = (index < this.original.length) ? this.props.current : this.original.length - 1; // To cope when last element being selected when it was removed
                    this.select(this.props.current);
                } else if (index < this.props.current) {
                    this.props.updateOption("current", this.props.current--);
                }
            } else {
                this.props.updateOption("current", 0);
                this.context.clearMedia();
                this.props.updateOption("shuffled", false);
            }

            this.setState({useRemoveConfig: false});
        }
        _shuffleAnimationCallback = () => {
            if (!this.state.isPlaylistContainerSlidingUp) {
                this.setState({useShuffleConfig: false});
                return;
            }

            if (this.props.shuffled) {
                this.context.setMedia([...this.props.playlist].sort(() => 0.5 - Math.random()));
                this.props.addUniqueToArray(constants.keys.PLAYER_CLASS, this.stateClass.shuffled);
            } else {
                this._originalPlaylist();
                this.props.removeFromArrayByValue(constants.keys.PLAYER_CLASS, this.stateClass.shuffled);
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
        componentDidMount() {
            this._initPlaylist(this.props.playlist);
            this._init();
        }
        render() {
            const MediaAnimationConfig = this.state.useRemoveConfig ? this.props.removeAnimation : this.props.addAnimation

            return (   
                <WrappedComponent {...this.props} {...this.keyBindings} {...this.event} stateClass={this.stateClass}>                       				
                    <div id="jp_container_playlist">
                        <div className="jp-playlist">
                            <Playlist isSlidingUp={this.state.isPlaylistContainerSlidingUp} config={this.state.useShuffleConfig ? this.props.shuffleAnimation : this.props.displayAnimation} onRest={this._shuffleAnimationCallback}>
                                <PlaylistItem medias={this.props.playlist} current={this.props.current} config={MediaAnimationConfig} onRest={this._removeAnimationCallback} 
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
)

export const jPlaylistDefaultValues = {
    html: {},
    playlist: [],
    shuffleOnLoop: true,
    shuffled: false,
    itemClass: "jp-playlist-item",
    freeItemClass: "jp-playlist-item-free",
    removeItemClass: "jp-playlist-item-remove",
    freeGroupClass: "jp-free-media",
    current: 0
};