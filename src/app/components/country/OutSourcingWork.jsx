import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const OutSourcingWork = ({ data }) => {
  const { title, cards, styles } = data || {};
  const {
    mainBoxStyle,
    titleStyle,
    cardStyle,
    cardContentBoxStyle,
    cardTitleStyle,
    descriptionStyle,
    cardImageBoxStyle,
    cardImageStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Typography sx={titleStyle}>{title}</Typography>
      <Grid container gap={1.5} justifyContent={'center'} maxWidth={'1300px'}>
        {cards?.map(
          ({ title, description, image, maxWidth, origin, scale }, index) => (
            <Grid item xs={12} md={5.5} key={index}>
              <Box sx={cardStyle}>
                <Box sx={cardContentBoxStyle}>
                  <Typography sx={cardTitleStyle}>{title}</Typography>
                  <Typography sx={descriptionStyle}>{description}</Typography>
                </Box>
                <Box sx={cardImageBoxStyle}>
                  <Box
                    src={image}
                    component={'img'}
                    sx={cardImageStyle(maxWidth, origin, scale)}
                  />
                </Box>
              </Box>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};

export default OutSourcingWork;
