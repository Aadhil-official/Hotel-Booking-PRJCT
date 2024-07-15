import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import { Grid, Pagination } from '@mui/material'
import axios from 'axios';

function BrowseAllRoom() {

    const [rooms, setRooms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOption, setFilterOption] = useState('hotelName');
    const [roomsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get('http://localhost:8080/api/auth/getAllRooms')
            .then(response => {
                setRooms(response.data);
                console.log("Rooms........", response.data);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        filteredRooms = e.target.value;
        setCurrentPage(1);
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    };

    let filteredRooms = rooms.filter((room) => {
        if (!searchQuery) return true;
        const value = room[filterOption];
        return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    })

    const indexOfLastRoom = roomsPerPage * currentPage;
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
    const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div>
            <Nav />
            
            {currentRooms.map((room, index) => (
                <Grid container key={index}>
                    <Grid item xs={3} >
                        <img src={room.image} alt="room image" />
                    </Grid>
                </Grid>
            ))}
            <Pagination
                count={Math.ceil(filteredRooms.length / roomsPerPage)}
                variant='outlined'
                shape='rounded'
                color="primary"
                onChange={handlePageChange}
                page={currentPage}
                // size="medium"
                showFirstButton
                showLastButton
            />
        </div>
    );
}

export default BrowseAllRoom