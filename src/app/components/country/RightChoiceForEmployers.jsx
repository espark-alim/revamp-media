import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const RightChoiceForEmployers = ({ data }) => {
  const { title, features, styles } = data || {};
  const {
    mainBoxStyle,
    titleStyle,
    gridStyle,
    cardStyle,
    imageStyle,
    cardTitleStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Typography sx={titleStyle}>{title}</Typography>
      <Grid gap={2.2} container justifyContent={'center'} width={gridStyle}>
        {features?.map(({ title, icon }, index) => (
          <Box key={index} sx={cardStyle}>
            <Box component={'img'} src={icon} sx={imageStyle} />
            <Typography sx={cardTitleStyle}>{title}</Typography>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default RightChoiceForEmployers;
