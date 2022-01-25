import YoutubePlayer from "./youtubePlayer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStepBackward, faStepForward} from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import React from "react";
import playlists from "./data";
import {urlRegex} from "../utils/regex";

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playlist: this.generatePlaylist(),
            index: this.generateRandom(playlists.length),
            baseURL: 'https://www.youtube.com/embed/?list={id}&index={index}',
            queryStrings: '&amp;t=15&amp;wmode=transparent&amp;autoplay=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;showsearch=0&amp;autohide=1&amp;controls=0&amp;wadsworth=1',
            iframeSrc: "",
        }
    }

    componentDidMount() {
        this.setState({
            iframeSrc: this.setURL(this.state.baseURL, this.state.playlist.id, this.state.index, this.state.queryStrings)
        })
    }

    generatePlaylist() {
        const loc = this.generateRandom(playlists.length);
        return playlists[loc];
    }

    generateRandom = function (num) {
        return Math.floor(Math.random() * num);
    };

    setURL(url, id, index, queryStrings) {
        return urlRegex(url, id, index) + queryStrings;
    };

    async getHello() {
        const response = await fetch('http://localhost:8080/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    async previousTrack(e) {
        e.preventDefault();
        this.setState({
            iframeSrc: this.setURL(this.state.baseURL, this.state.playlist.id, this.state.index, this.state.queryStrings),
            index: (this.state.index + this.state.playlist.max - 1) % this.state.playlist.max,
        });
    }

    async nextTrack(e) {
        e.preventDefault();
        this.setState({
            iframeSrc: this.setURL(this.state.baseURL, this.state.playlist.id, this.state.index, this.state.queryStrings),
            index: (this.state.index + this.state.playlist.max + 1) % this.state.playlist.max,
        });
    }

    render() {
        return <div className="container-fluid">
            <div className="d-flex justify-content-around align-items-center">
                <Button id={'back'} inner={<FontAwesomeIcon className="icon" icon={faStepBackward}/>}
                        onClick={(e) => this.previousTrack(e)}/>
                <YoutubePlayer src={this.state.iframeSrc}/>
                <Button id={'forward'} inner={<FontAwesomeIcon className="icon" icon={faStepForward}/>}
                        onClick={(e) => this.nextTrack(e)}/>
            </div>
        </div>
    }
}

export default Player;