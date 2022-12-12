import React from 'react';
import Navbar from '../sharedComponent/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../sharedComponent/Footer';
import { Box } from '@mui/system';

const Root = () => {
    return (
        <>
        <Navbar />
        <Box>
            <Outlet />
        </Box>
        <Footer />
        </>
    );
};

export default Root;