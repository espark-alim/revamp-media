import React from 'react';
import { Box, Typography } from '@mui/material';

const DashboardHero = ({ data }) => {
  const { styles } = data || {};
  const { mainBoxStyle, titleStyle, imageBoxStyle, imageStyle } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Typography sx={titleStyle}>
        Global Talent Onboarding at Your Fingertips
      </Typography>

      <Box sx={imageBoxStyle}>
        <img
          src="/images/country/dashboard-hero/dashboard.png"
          alt="Dashboard Preview"
          style={imageStyle}
        />
      </Box>
    </Box>
  );
};

export default DashboardHero;
