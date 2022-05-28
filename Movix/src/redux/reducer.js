import {
    GET_RANKING_FILM,
    GET_LIST_FILM,
} from "./action";

const initialState = {
    dataRankingFilm: [],
    dataListFilm: [],
    linkFoto: 'https://firebasestorage.googleapis.com/v0/b/image-uas-pam.appspot.com/o/',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RANKING_FILM:
            return { ...state, dataRankingFilm: action.payload };
        case GET_LIST_FILM:
            return { ...state, dataListFilm: action.payload };
        default:
            return state;
    }
}

export default userReducer;