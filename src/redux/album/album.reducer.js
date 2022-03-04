import ALBUM_TYPES from './album.types'

const INITIAL_STATE = {
    albumLists: null,
    fetching: false,
    filterValue: ""
}

const albumReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ALBUM_TYPES.FETCH_ALBUM_SUCCESS:
            return {
                ...state,
                albumLists: action.payload
            }
        case ALBUM_TYPES.FETCH_ALBUM_FAILURE:
            return {
                ...state,
                failureMessage: action.payload
            }
        case ALBUM_TYPES.FILTER_ALBUM:
            return {
                ...state,
                filterValue: action.payload
            }
        default:
            return state
    }
}

export default albumReducer