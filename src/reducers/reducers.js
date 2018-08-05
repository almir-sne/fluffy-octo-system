export default function (state = {}, action) {
    switch (action.type) {
        case "SEARCH_SUCCESS":
            return {
                ...state,
                result: action.result
            };
        case "OAUTH_LOGIN_SUCCESS":
            sessionStorage.setItem("accessToken", action.accessToken);
            return state;
        default:
            return state;
    }
}