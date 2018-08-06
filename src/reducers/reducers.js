export default function (state = {}, action) {
    switch (action.type) {
        case "SEARCH_SUCCESS":
            return {
                ...resetState(state),
                result: action.result,
                loading: false
            };
        case "TRACKS_BY_ALBUM_SUCCESS":
            return {
                ...state,
                result: {...state.result, tracksByAlbum: action.result},
                loading: false
            };
        case "ALBUMS_BY_ARTIST_SUCCESS":
            return {
                ...state,
                result: {...state.result, albumsByArtist: action.result},
                loading: false
            };
        case "OAUTH_LOGIN_SUCCESS":
            sessionStorage.setItem("accessToken", action.accessToken);
            return state;
        case "ALBUMS_BY_ARTIST":
        case "TRACKS_BY_ALBUM":
        case "SEARCH":
            return {
                ...state,
                selectedId: action.selectedId,
                loading: true
            };
        case "RESET":
            return resetState(state);
        case "UPDATE_FAVORITES":
        case "LOAD_FAVORITES_SUCCESS":
            return {
                ...state,
                favorites: action.favorites
            };
        default:
            return state;
    }
}

function resetState(oldState) {
    const {selectedId, tracksByAlbum, albumsByArtist, ...newState} = oldState;
    return newState;
}