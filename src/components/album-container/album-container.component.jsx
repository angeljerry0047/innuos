import React from 'react'
import { connect } from 'react-redux'
import AlbumItem from '../album-item/album-item.component'

import './album-container.style.css'

const AlbumContainer = ({ albumLists, filterValue}) => {
    return (
    <div className='album-list-container'>
        {
            filterValue === "ALL" 
            ? 
            albumLists.map(album => <AlbumItem key={album.id} {...album} />) 
            : 
            albumLists.filter(album => album.source === filterValue).map(filteredAlbum => (
                <AlbumItem key={filteredAlbum.id} {...filteredAlbum} />
            ))

        }
    </div>
)}

const mapStateToProps = state => ({
    albumLists: state.albums.albumLists,
    filterValue: state.albums.filterValue
})

export default connect(mapStateToProps)(AlbumContainer)