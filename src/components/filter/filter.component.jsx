import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { filterAlbum } from '../../redux/album/album.action'

const FilterDropdown = ({filterAlbum}) => {

    const [value, setValue] = useState("ALL")
    
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        filterAlbum(value)
    },[value])

    return (
        <select value={value} onChange={handleChange}>
            <option value="ALL">All</option>
            <option value="LOCAL">Local</option>
            <option value="QOBUZ">QoBuz</option>
        </select>
)}

const mapDispatchToProps = (dispatch) => ({
    filterAlbum: (value) => dispatch(filterAlbum(value))
})

export default connect(null, mapDispatchToProps)(FilterDropdown)