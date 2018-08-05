import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {TrackCard, AlbumCard, ArtistCard} from "./components/Cards"
import "../styles/search.scss"

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
                <div className="row search-box">
                    <div className="col-sm-5">
                        <div className="input-group">
                            <input type="text" className="form-control" name="query" onChange={this.handleChange}/>
                            <div className="input-group-addon">
                                <div className="select-wrapper">
                                    <select name="queryType" onChange={this.handleChange}>
                                        {this.options.map(({label, value}) =>
                                            <option key={value} value={value}>{label}</option>)}
                                    </select>
                                </div>
                                <button className="btn" type="submit" onClick={this.search}> <i className="fa fa-search"/> </button>
                            </div>
                        </div>
                    </div>
                </div>


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