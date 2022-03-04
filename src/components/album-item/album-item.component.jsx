import React from 'react'

import LogoImage from '../../assests/images/qobuz.png'
import './album-item.styles.css'

const ServiceLogoComponent = () => (
    <div
        className='source-img'
        style={{
            backgroundImage: `url(${LogoImage})`
        }}
    />
)

const AlbumItem = ({source, artist, album, cover}) => {
    
    const image = cover ? require(`../../assests/covers/${cover}`) : require("../../assests/images/undefined_album_cover.png")

    return (
    <div className='album-item'>
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${image})`
            }}
            
        >
            {
                source !== "LOCAL" ? <ServiceLogoComponent /> : null
            }
        </div>
        <div className='album-details'>
            <span className='album-name'>{album}</span>
            <span className='album-artist'>{artist}</span>
        </div>
    </div>
)}

export default AlbumItem