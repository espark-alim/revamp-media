'use client';
import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

const HomePageExpertTeam = ({ data }) => {
  const isMax = useMediaQuery('(max-width:1023px)');
  const isMin = useMediaQuery('(min-width:769px)');
  const { dapartment, styles } = data || {};
  const {
    containerStyle,
    slideStyle,
    cardContainerStyle,
    typographyBoxStyle,
    postTypographyStyle,
    employeeBoxStyle,
    imageStyle,
    nameTypogrphyStyle,
    positionTypographyStyle,
    mainLayoutStyle,
    headerBoxStyle,
    titleTypographyStyle,
  } = styles || {};
  const renderSlide = (item, index) => (
    <SwiperSlide key={index} style={slideStyle(isMin, isMax)}>
      <Box key={index} sx={cardContainerStyle(index)}>
        <Box sx={typographyBoxStyle}>
          <Box component={'img'} src={item?.icon || ''} alt="designer-icon" />
          <Typography sx={postTypographyStyle}>{item?.post || ''}</Typography>
        </Box>
        {item?.employees?.map((emp, empIndex) => (
          <Box key={empIndex} sx={employeeBoxStyle(empIndex)}>
            <Box sx={imageStyle(empIndex)}>
              <Image
                width={1200}
                height={600}
                alt="Hero GIF"
                src={emp?.image || ''}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </Box>
            <Box>
              <Typography sx={nameTypogrphyStyle}>{emp?.name || ''}</Typography>
              <Typography sx={positionTypographyStyle}>
                {emp?.position || ''}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </SwiperSlide>
  );

  return (
    <Box sx={mainLayoutStyle}>
      <Box sx={headerBoxStyle}>
        <Typography sx={titleTypographyStyle}>{data?.title || ''}</Typography>
      </Box>
      <Box
        sx={{ mt: { xs: 3, sm: 4, md: 6 }, mx: { xs: 3, md: 2 } }}
        id="expert-team"
      >
        <Swiper
          grabCursor={true}
          speed={3000}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          direction={isMin ? 'horizontal' : 'vertical'}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            769: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          style={containerStyle}
        >
          {dapartment?.map(renderSlide)}
        </Swiper>
      </Box>
    </Box>
  );
};

export default HomePageExpertTeam;
