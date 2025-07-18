'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FlaxibleSlider from '../FlexibleSlider';

const CompaniesTrust = ({ data }) => {
  const { title, cards, styles } = data || {};
  const {
    mainBoxStyle,
    contentBoxStyle,
    titleStyle,
    slideStyle,
    cardStyle,
    imageStyle,
    titleAndDescripitonBoxStyle,
    cardTitleStyle,
    cardDescriptionStyle,
  } = styles || {};

  const ODCCard = ({ title, image, description, extraSx = {} }) => (
    <Box
      sx={{
        ...cardStyle,
        ...extraSx,
      }}
    >
      <Box component={'img'} src={image} sx={imageStyle} />
      <Box sx={titleAndDescripitonBoxStyle}>
        <Typography sx={cardTitleStyle}>{title}</Typography>
        <Typography sx={cardDescriptionStyle}>{description}</Typography>
      </Box>
    </Box>
  );

  return (
    <Box id="pricing-difference" sx={mainBoxStyle}>
      <Box sx={contentBoxStyle}>
        <Typography sx={titleStyle}>{title}</Typography>
      </Box>
      <Grid
        container
        justifyContent={'center'}
        maxWidth={'1440px'}
        mx={'auto'}
        gap={4.5}
      >
        {cards?.map(({ title, image, description }, index) => (
          <ODCCard
            key={index}
            title={title}
            image={image}
            description={description}
          />
        ))}
        <FlaxibleSlider
          data={cards}
          isDisplay={true}
          slideStyle={slideStyle}
          card={(title, image, description) => (
            <ODCCard
              image={image}
              title={title}
              description={description}
              extraSx={{ display: { xs: 'flex', md: 'none' } }}
            />
          )}
        />
      </Grid>
    </Box>
  );
};

export default CompaniesTrust;
