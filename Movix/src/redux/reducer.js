import {
    GET_RANKING_FILM,
    GET_LIST_FILM,
    CHENGE_GENDRE_FILM,
} from "./action";

const initialState = {
    dataRankingFilm: [],
    dataListFilm: [],
    linkFoto: 'https://firebasestorage.googleapis.com/v0/b/image-uas-pam.appspot.com/o/',
    gendreSelect: 'All',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RANKING_FILM:
            return { ...state, dataRankingFilm: action.payload };
        case GET_LIST_FILM:
            return { ...state, dataListFilm: action.payload };
        case CHENGE_GENDRE_FILM:
            return { ...state, gendreSelect: action.data };
        default:
            return state;
    }
}

export default userReducer;