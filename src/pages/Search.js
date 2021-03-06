import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {TrackCard, AlbumCard, ArtistCard, TrackCardBasic} from "./components/Cards"
import "../styles/search.scss"
import SearchBox from "./components/SearchBox"
import loadingSVG from "../loading.svg"

class Search extends Component {
    state = {queryType: "artist"};

    componentDidMount = () => {
        this.props.loadFavorites();
    };

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

    selectAlbum = ({id}) => {
        this.props.tracksByAlbum(id);
    };

    selectArtist = ({id}) => {
        this.props.albumsByArtist(id);
    };

    render() {
        const {artists, albums, tracks, albumsByArtist, tracksByAlbum} = this.props.result || {};
        const {selectedId, reset, loading = false} = this.props;
        return (
            <Fragment>
                <div className="container-fluid">
                    <SearchBox handleChange={this.handleChange} options={this.options} handleSearch={this.search}/>

                    {!selectedId && !loading &&
                    <div className="row card-container">
                        {artists && artists.items.map((item) =>
                            <ArtistCard key={item.id} card={item} onClick={this.selectArtist}/>)}

                        {albums && albums.items.map((item) =>
                            <AlbumCard key={item.id} card={item} onClick={this.selectAlbum}/>)}

                        {tracks && tracks.items.map((item) =>
                            <TrackCard key={item.id} card={item}/>)}
                    </div>
                    }
                    {selectedId && !loading &&
                    <div className="card-container">
                        <button className="btn btn-primary green-button" onClick={reset}>
                            <i className="fa fa-chevron-left"/> Back
                        </button>

                        {albumsByArtist &&
                        <Fragment>
                            <h2> Albums </h2>
                            <div className="row">
                                {albumsByArtist.items.map((item) =>
                                    <AlbumCard key={item.id} card={item} onClick={this.selectAlbum}/>)}
                            </div>
                        </Fragment>
                        }
                        {tracksByAlbum &&
                        <Fragment>
                            <h2> Tracks </h2>
                            <div className="row">
                                {tracksByAlbum.items.map((item) =>
                                    <TrackCardBasic key={item.id} card={item}/>)}
                            </div>
                        </Fragment>
                        }
                    </div>
                    }
                    {loading &&
                    <div className="center">
                        <img alt="loading..." width="10%" src={loadingSVG}/>
                    </div>
                    }
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (reducer) => ({
    accessToken: reducer.accessToken,
    result: reducer.result,
    selectedId: reducer.selectedId,
    loading: reducer.loading
});

const mapDispatchToProps = dispatch => ({
    search: (state) => {
        dispatch({type: 'SEARCH', ...state})
    },
    reset: () => {
        dispatch({type: 'RESET'})
    },
    albumsByArtist: (selectedId) => {
        dispatch({type: 'ALBUMS_BY_ARTIST', selectedId})
    },
    tracksByAlbum: (selectedId) => {
        dispatch({type: 'TRACKS_BY_ALBUM', selectedId})
    },
    loadFavorites: () => {
        dispatch({type: 'LOAD_FAVORITES'})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);