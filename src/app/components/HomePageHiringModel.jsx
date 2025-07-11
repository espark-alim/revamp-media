'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { open } from '@/utils';
import Image from 'next/image';

const HomePageHiringModel = ({ data }) => {
  const { title, icon, items, image, styles } = data || {};
  const {
    mainBoxStyle,
    innerBoxStyle,
    titleBoxStyle,
    titleStyle,
    buttonBoxStyle,
    buttonStyle,
    cardStyle,
    cardHeaderStyle,
    ulStyle,
    listStyle,
    cardImageStyle,
  } = styles || {};
  const renderSlide = (eachItem, index) => (
    <SwiperSlide key={index}>
      <Box key={index} sx={cardStyle}>
        <Box>
          <Box sx={cardImageStyle}>
            <Image
              width={1200}
              height={600}
              src={image}
              style={{ width: '100%', height: 'auto' }}
              priority
              alt=""
            />
          </Box>
          <Typography
            sx={cardHeaderStyle}
            dangerouslySetInnerHTML={{ __html: eachItem?.title }}
          />
        </Box>
        <Box sx={{ flexGrow: 1, my: 2 }}>
          <Typography component={'ul'} sx={ulStyle}>
            {eachItem?.points?.map((item, pointIndex) => (
              <Typography key={pointIndex} component={'li'} sx={listStyle}>
                {item?.text}
              </Typography>
            ))}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={() => open(eachItem?.link, '_blank')}
            sx={buttonStyle}
          >
            {eachItem?.buttonText}
            <Box sx={buttonBoxStyle}>
              <Image
                width={1200}
                height={600}
                src={icon}
                style={{ width: '100%', height: 'auto' }}
                priority
                alt=""
              />
            </Box>
          </Button>
        </Box>
      </Box>
    </SwiperSlide>
  );

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={innerBoxStyle} id="flexible-hiring-models">
        {title && (
          <Box sx={titleBoxStyle}>
            <Typography variant="h1" sx={titleStyle}>
              {title || ''}
            </Typography>
          </Box>
        )}
        <>
          <Swiper
            grabCursor={true}
            speed={3000}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 2.2,
                spaceBetween: 25,
              },
              868: {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
            }}
          >
            {items?.map(renderSlide)}
          </Swiper>
        </>
      </Box>
    </Box>
  );
};

export default HomePageHiringModel;
