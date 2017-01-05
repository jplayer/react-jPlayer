import React from 'react';
import expect from "expect";
import { shallow } from 'enzyme';
import sinon from 'sinon';

import JPlayerPlaylist from "../../JPlayer/JPlayerPlaylist";

describe("shallow: <JPlayerPlaylist />", () => {
    let mockjPlayerPlaylistOptions;
    let newOptions;
    let updateOptions = (newOptions, callback) => {
        newOptions = newOptions;
        callback && callback();
    };
    const defaultWrapper = () => shallow(<JPlayerPlaylist {...mockjPlayerPlaylistOptions} updateOptions={updateOptions} />);

    beforeEach(() => {
        mockjPlayerPlaylistOptions = {
            html: {
                //Toggle between play and pause in css based on playing or not
                play: <i className="fa fa-play"></i>,
                mute: <i className="fa fa-volume-up"></i>,
                fullScreen: <i className="fa fa-expand"></i>,
                repeat: <div><i className="fa fa-repeat"></i><i className="fa fa-bars"></i></div>,
                shuffle: <i className="fa fa-random"></i>,
                previous: <i className="fa fa-step-backward"></i>,
                next: <i className="fa fa-step-forward"></i>,
                playlistOptions: <div><i className="fa fa-ellipsis-h"></i><i className="fa fa-comment"></i></div>
            },
            playlist: [
                {
                    title:"Cro Magnon Man",
                    artist:"The Stark Palace",
                    mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
                    poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png",
                    free: true
                },
                {
                    title:"Song",
                    artist:"Miaow",
                    mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                    oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
                    poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png",
                    free: true
                }
            ]
        }
    });

    it("render: a <JPlayer /> component", () => expect(defaultWrapper().find("JPlayer").length).toBe(1));
    it("render: a '#jp_container_playlist'", () => expect(defaultWrapper().find("#jp_container_playlist").length).toBe(1));
    it("render: a '.jp-playlist'", () => expect(defaultWrapper().find(".jp-playlist").length).toBe(1));
    it("render: a <Playlist /> component", () => expect(defaultWrapper().find("Playlist").length).toBe(1));
    it("render: <Media /> components equal to playlist", () => expect(defaultWrapper().find("Media").length).toBe(mockjPlayerPlaylistOptions.playlist.length));  
    const shuffleOnLoopTest = (shuffleOnLoop) => {
        it("prop: shuffleOnLoop shuffles playlist on next() on last item if shuffle is true & looping playlist", () => {
            mockjPlayerPlaylistOptions.shuffleOnLoop = shuffleOnLoop;
            mockjPlayerPlaylistOptions.loop = "loop-playlist";
            mockjPlayerPlaylistOptions.shuffle = true;

            sinon.stub(Array.prototype, "sort").returns(shuffleOnLoop);
            
            const wrapper = defaultWrapper();
            wrapper.instance().state.current = mockjPlayerPlaylistOptions.playlist.length - 1;
            wrapper.instance().next();

            expect(newOptions).toBe(shuffleOnLoop);
        });
    };
    const enableRemoveControlsTest = (enableRemoveControls) => {
        it("prop: enableRemoveControls renders remove controls", () =>  {
            mockjPlayerPlaylistOptions.enableRemoveControls = enableRemoveControls;
            mockjPlayerPlaylistOptions.removeItemClass = "removeItemClassMock";

            expect(defaultWrapper().find("." + mockjPlayerPlaylistOptions.removeItemClass).isEmpty()).toEqual(!enableRemoveControls); 
        });
    };
    suffleOnLoopTest(true);
    enableRemoveControlsTest(true);
    enableRemoveControlsTest(false);
});

describe("Full: <JPlayerPlaylist />", () => {
    
});