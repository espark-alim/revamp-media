import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import Image from 'next/image';

const PowerProjects = ({ data }) => {
  const { first_text, second_text, third_text, styles } = data || {};
  const {
    mainBoxStyle,
    containerStyle,
    titleSyle,
    logosBoxStyle,
    chipBoxStyle,
    chipStyle,
  } = styles || {};

  const RenderText = ({
    title,
    maxWidth,
    scrollDirection = 'right',
    top,
    logos,
  }) => {
    const scrollRight = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  `;
    const scrollLeft = keyframes`
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  `;

    return (
      <Box sx={containerStyle(maxWidth)}>
        <Box sx={{ position: 'relative' }}>
          <Typography
            variant="h1"
            component={'h1'}
            textAlign="center"
            sx={titleSyle}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <Box
            sx={logosBoxStyle(scrollDirection, scrollRight, scrollLeft, top)}
          >
            {logos?.map((logo, index) => (
              <Chip
                key={index}
                sx={chipStyle}
                label={
                  <Box sx={chipBoxStyle}>
                    <Box
                      sx={{
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Image
                        width={1200}
                        height={600}
                        style={{ width: '100%', height: 'auto' }}
                        src={logo?.src}
                        priority
                        alt=""
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: '16px', md: '20px' },
                        fontWeight: 400,
                        color: '#000000',
                      }}
                    >
                      {logo?.text}
                    </Typography>
                  </Box>
                }
              />
            ))}
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={mainBoxStyle}>
      <RenderText
        title={first_text?.text}
        logos={first_text?.logos}
        maxWidth={{ xs: '400px', md: '680px', lg: '850px' }}
        scrollDirection={'right'}
        top={'73%'}
      />
      <RenderText
        title={second_text?.text}
        logos={second_text?.logos}
        maxWidth={{ xs: '550px', md: '800px', lg: '1150px' }}
        scrollDirection={'left'}
        top={'82%'}
      />
      <RenderText
        title={third_text?.text}
        logos={third_text?.logos}
        maxWidth={'1400px'}
        scrollDirection={'right'}
        top={{ xs: '95%', md: '82%' }}
      />
    </Box>
  );
};

export default PowerProjects;
