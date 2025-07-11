import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css';
import {
  paragraphStyle,
  PricingDefferenceStyles,
  slideStyle,
  titleStyle,
} from '@/constants/new-home';
import Image from 'next/image';

const PricingDefference = ({ data, backgroundColorStyle, titleColor }) => {
  const {
    cardStyle,
    imageStyle,
    typoBoxStyle,
    containerStyle,
    mainTitleStyle,
  } = PricingDefferenceStyles || {};

  const renderSlide = (card, index) => (
    <SwiperSlide key={index} style={slideStyle}>
      <Card sx={cardStyle}>
        <Box sx={imageStyle}>
          <Image
            width={1200}
            height={600}
            alt="Hero GIF"
            src={card?.icon}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </Box>
        <Box sx={typoBoxStyle}>
          <Typography variant="h3" sx={titleStyle}>
            {card?.title}
          </Typography>
          <Typography sx={paragraphStyle}>{card?.description}</Typography>
        </Box>
      </Card>
    </SwiperSlide>
  );

  return (
    <Box
      sx={{
        px: 1.5,
        ...backgroundColorStyle,
      }}
    >
      <Box sx={containerStyle} id="pricing-difference">
        {data?.title && (
          <Box sx={{ pt: 2, px: 2 }}>
            <Typography
              variant="h2"
              sx={{ ...mainTitleStyle, color: titleColor || '#001C63' }}
            >
              {data?.title}
            </Typography>
          </Box>
        )}
        {
          <Swiper
            grabCursor={true}
            speed={3000}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {data?.items?.map(renderSlide)}
          </Swiper>
        }
      </Box>
    </Box>
  );
};

export default PricingDefference;
