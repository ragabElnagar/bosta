import { Box, Typography } from '@mui/material';
import React from 'react';
import "./style.css"

function Footer(props) {
    return (
        <Box className="footerBox">
            <Typography className='footerTypography'>Copyright ©2024 bosta.com</Typography>
        </Box>
    );
}

export default Footer;