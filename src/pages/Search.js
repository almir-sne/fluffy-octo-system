import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {TrackCard, AlbumCard, ArtistCard} from "./components/Cards"

class Search extends Component {
    state = {queryType: "artist"};

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    };

    search = () => {
        this.props.search(this.state)
    };

    options = [
        {label: "Artist", value: "artist"},
        {label: "Album", value: "album"},
        {label: "Track", value: "track"},
    ];

    render() {
        const {artists, albums, tracks} = this.props.result || {};
        return (
            <Fragment>
                <input type="text" name="query" onChange={this.handleChange}/>
                <button onClick={this.search}> Search </button>
                <select name="queryType" onChange={this.handleChange}>
                    {this.options.map(({label, value}) => <option key={value} value={value}>{label}</option>)}
                </select>

                {artists && artists.items.map((item) =>
                    <ArtistCard key={item.id} card={item}/>)}

                {albums && albums.items.map((item) =>
                    <AlbumCard key={item.id} card={item}/>)}

                {tracks && tracks.items.map((item) =>
                    <TrackCard key={item.id} card={item}/>)}
            </Fragment>
        )
    }
}

const mapStateToProps = (reducer) => ({
    accessToken: reducer.accessToken,
    result: reducer.result
});

const mapDispatchToProps = dispatch => ({
    search: (state) => {
        dispatch({type: 'SEARCH', ...state})
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);