import React, { useEffect, useState } from 'react'
import { Nav } from '../Components/Index'
import { createTheme, Grid, Pagination, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material'
import axios from 'axios';

function BrowseAllRoom() {

    // const {user} = useUser();

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

    let theme = createTheme();

    return (
        <div>
            <Nav />
            <br /><br /><br />
            {currentRooms.length > 0 ? currentRooms.map((room, index) => (
                <Grid container key={index}>
                    {/* {user.username === 'ADMIN' &&
                        <Grid item xs={3} onClick={handleEdit(room.id)}>
                            <img src={room.image} alt="room image" />
                        </Grid>} */}

                    {/* {user.username !== 'ADMIN' && */}
                        <Grid item xs={3} onClick={handleEdit(room.id)}>
                            <img src={room.image} alt="room image" />
                        </Grid>
                        {/* } */}
                </Grid>
            )) :
                <Grid container textAlign='center' sx={{ marginTop: '15%', marginBottom: '15%' }}>
                    <Grid item xs={12}>
                        <ThemeProvider theme={createTheme(responsiveFontSizes(theme))}>
                            <Typography variant='h3'>
                                No Hotels Available
                            </Typography>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            }

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