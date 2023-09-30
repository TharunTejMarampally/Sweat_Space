/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    {/* <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack> */}
    <Typography variant="h4" sx={{ fontSize: { lg: '18px', xs: '10px' } }} mt="41px" paddingTop="30px" textAlign="center" color="gray" pb="30px">Tharun Tej @2023</Typography>
  </Box>
);

export default Footer;
