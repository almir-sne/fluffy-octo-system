import React, {Component} from "react";
import {connect} from "react-redux";

class FavoriteButton extends Component {
    state = {isFavorite: false};

    componentDidMount = () => {
        this.setState({isFavorite: this.props.favorites.includes(this.props.id)});
    };

    favorite = (event) => {
        event.stopPropagation();
        const {isFavorite} = this.state;
        const {addFavorite, removeFavorite, id} = this.props;
        if (isFavorite) {
            removeFavorite(id);
            this.setState({isFavorite: false});

        } else {
            addFavorite(id);
            this.setState({isFavorite: true});
        }
    };

    render() {
        const {text} = this.props;
        return (
            <button className="btn btn-default green-button" onClick={this.favorite}>
                <i className={this.state.isFavorite ? "fa fa-star" : "fa fa-star-o"}/> {text}
            </button>
        )
    }
}

const mapStateToProps = (reducer) => ({
    favorites: reducer.favorites
});

const mapDispatchToProps = dispatch => ({
    addFavorite: (id) => {
        dispatch({type: 'ADD_FAVORITE', id})
    },
    removeFavorite: (id) => {
        dispatch({type: 'REMOVE_FAVORITE', id})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);