import axios from "axios"

export const GET_RANKING_FILM = 'GET_RANKING_FILM'
export const GET_LIST_FILM = 'GET_LIST_FILM'
export const CHENGE_GENDRE_FILM = 'CHENGE_GENDRE_FILM'

export const fetchApiRanking = () => {
    try {
        return async dispatch => {
            return axios.get("https://uas-pam-movix-api.herokuapp.com/movix_api/film-list/?req-ranking=1")
                .then(({ data }) => {
                    dispatch(
                        {
                            type: GET_RANKING_FILM,
                            payload: data
                        }
                    );
                })
        }
    } catch (error) {
        console.log(error);
    }
}

export const fetchApiListFilm = () => {
    try {
        return async dispatch => {
            return axios.get("https://uas-pam-movix-api.herokuapp.com/movix_api/film-list/")
                .then(({ data }) => {
                    dispatch(
                        {
                            type: GET_LIST_FILM,
                            payload: data
                        }
                    );
                })
        }
    } catch (error) {
        console.log(error);
    }
}

export const setGendreFilm = (data) => ({
    type: CHENGE_GENDRE_FILM,
    data: data,
})