import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

const TrustedPlatform = ({ data }) => {
  const { title, review, images, styles } = data || {};

  const {
    mainBoxStyle,
    titleStyle,
    swiperSlideStyle,
    slideImageStyle,
    reviewBoxStyle,
    reviewTitleStyle,
    reviewTextStyle,
  } = styles || {};

  const BreakBorderSlider = () => {
    return (
      <Box maxWidth={1400} mx="auto" py={{ xs: 6, md: 8 }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={'auto'}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          speed={3000}
          grabCursor={true}
          breakpoints={{
            0: {
              spaceBetween: 30,
            },
            769: {
              spaceBetween: 50,
            },
          }}
        >
          {images?.map((image, i) => (
            <SwiperSlide key={i} style={swiperSlideStyle}>
              <Box sx={slideImageStyle}>
                {/* <Box
                  component="img"
                  src={image}
                  alt={`logo-${i}`}
                  sx={slideImageStyle}
                /> */}
                <Image
                  width={1200}
                  height={600}
                  style={{ width: '100%', height: 'auto' }}
                  alt={`logo-${i}`}
                  src={image}
                  priority
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  };

  return (
    <Box sx={mainBoxStyle}>
      <Box>
        <Typography sx={titleStyle}>{title}</Typography>
      </Box>
      <Box>
        <BreakBorderSlider />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ pt: 1 }}
        justifyContent={{ xs: 'center', lg: 'space-evenly' }}
        gap={{ xs: 4, md: 2 }}
        maxWidth={'1500px'}
      >
        {review?.map((item, index) => (
          <Grid item xs={12} sm={6} md={3.5} lg={3} key={index}>
            <Box sx={reviewBoxStyle}>
              <Typography sx={reviewTitleStyle}>{item?.title}</Typography>
              <Typography sx={reviewTextStyle}>{item?.text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrustedPlatform;
