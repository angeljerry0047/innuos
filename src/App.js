import React from 'react'
import { connect } from 'react-redux'

import AlbumContainer from './components/album-container/album-container.component'
import FilterDropdown from './components/filter/filter.component'

import { fetchAlbumStartAsync } from './redux/album/album.action'

import './App.css'

const App = ({albumLists, fetchAlbum}) => {

    // console.log(albumLists, " : ", )
    return (

    <div className='homepage'>
        <div className='options'>
            
            {
                albumLists ? <FilterDropdown /> : <button onClick={fetchAlbum} >GET ALBUMS</button>
            }
        </div>
        {
            albumLists ? <AlbumContainer /> : null 
        }
    </div>
)}



const mapStateToProps = (state) => ({
    albumLists: state.albums.albumLists
})

const mapDispatchToProps = (dispatch) => ({
    fetchAlbum: () => dispatch(fetchAlbumStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
