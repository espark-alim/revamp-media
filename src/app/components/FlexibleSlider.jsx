'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Box } from '@mui/material';

const FlexibleSlider = ({ data, slideStyle, card, isDisplay }) => {
  const renderCard = ({ title, image, description }) => {
    return card(title, image, description);
  };

  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto',
        maxWidth: '768px',
        display: { xs: isDisplay || 'none', md: 'none' },
        justifyContent: 'center',
      }}
    >
      <Swiper
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        grabCursor={true}
        spaceBetween={16}
        slidesPerView="auto"
        speed={3000}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '30px 20px 30px 20px',
        }}
      >
        {data?.map(({ title, image, description }, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: '98%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ...slideStyle,
            }}
          >
            {renderCard({ title, image, description })}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FlexibleSlider;
