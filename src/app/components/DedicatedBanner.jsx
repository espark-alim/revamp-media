'use client';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const DedicatedBanner = ({ data }) => {
  const { title, text, backgroundImage, buttonText, link, styles } = data || {};
  const {
    mainBoxStyle,
    overlayImageStyle,
    titleStyle,
    textStyle,
    buttonStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      {backgroundImage && (
        <Box
          component="img"
          alt="Background"
          sx={overlayImageStyle}
          src={backgroundImage}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography
          sx={titleStyle}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Typography sx={textStyle}>{text}</Typography>
        <Button
          variant="contained"
          onClick={() => window?.open(link, '_blank')}
          sx={buttonStyle}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default DedicatedBanner;
