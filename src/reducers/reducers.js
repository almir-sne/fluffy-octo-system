export default function (state = {}, action) {
    switch (action.type) {
        case "SEARCH_SUCCESS":
            return {
                ...resetState(state),
                result: action.result
            };
        case "TRACKS_BY_ALBUM_SUCCESS":
            return {
                ...state,
                result: {...state.result, tracksByAlbum: action.result}
            };
        case "ALBUMS_BY_ARTIST_SUCCESS":
            return {
                ...state,
                result: {...state.result, albumsByArtist: action.result}
            };
        case "OAUTH_LOGIN_SUCCESS":
            sessionStorage.setItem("accessToken", action.accessToken);
            return state;
        case "ALBUMS_BY_ARTIST":
        case "TRACKS_BY_ALBUM":
            return {
                ...state,
                selectedId: action.selectedId,
            };
        case "RESET":
            return resetState(state);
        default:
            return state;
    }
}

function resetState(oldState) {
    const {selectedId, tracksByAlbum, albumsByArtist, ...newState} = oldState;
    return newState;
}