import ALBUM_TYPES from './album.types'
import { getData } from './album.utils'

// export const fetchAlbumStart = () => ({
//     type: ALBUM_TYPES.FETCH_ALBUM_START,
// })

export const fetchAlbumSucess = (data) => ({
    type: ALBUM_TYPES.FETCH_ALBUM_SUCCESS,
    payload: data
})

export const fetchAlbumFailure = (error) => ({
    type: ALBUM_TYPES.FETCH_ALBUM_FAILURE,
    payload: error
})

export const fetchAlbumStartAsync = () => {
    return dispatch => {
        getData()
        .then(res => res.json())
        .then(data => dispatch(fetchAlbumSucess(data)))
        .catch(error => dispatch(fetchAlbumFailure(error)))
    }
}

export const filterAlbum = (filter_value) => ({
    type: ALBUM_TYPES.FILTER_ALBUM,
    payload: filter_value
})

