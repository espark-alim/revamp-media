import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import EmployeeSlider from "./EmployeeSlider";
import { EMPLOYEE_SLIDER_DATA } from "../../constant/new-home";

const EmployeeBanner = ({ data }) => {
  const {
    title,
    description,
    bgImage,
    animatedGif,
    btnTitle,
    btnLink,
    styles,
  } = data || {};
  const {
    mainBoxStyle,
    innerBoxStyle,
    contentBoxStyle,
    subTitleBoxStyle,
    subTitleStyle,
    titleStyle,
    descriptionStyle,
    btnStyle,
    imageBoxStyle,
    imageStyle,
    endIconStyle,
  } = styles || {};

  return (
    <>
      <Box sx={mainBoxStyle(bgImage)}>
        <Box sx={innerBoxStyle}>
          <Box sx={contentBoxStyle}>
            <Box sx={subTitleBoxStyle}>
              <Typography sx={subTitleStyle}>
                75% of <span style={{ color: "#029894" }}>Employers</span> Face
                Talent Shortages
              </Typography>
              <Typography sx={titleStyle}>{title}</Typography>
            </Box>
            <Typography sx={descriptionStyle}>{description}</Typography>
            <Button
              disableRipple
              sx={btnStyle}
              endIcon={
                <Box sx={endIconStyle}>
                  <Image
                    src="/images/header/topbar/rc-right.png"
                    style={{ objectFit: "contain" }}
                    alt="icon"
                    fill
                  />
                </Box>
              }
            >
              {btnTitle}
            </Button>
          </Box>
          <Box sx={imageBoxStyle} id="webm-video">
            <Image
              src={animatedGif}
              style={imageStyle}
              alt="Animated GIF"
              width={1200}
              height={600}
              priority
            />
          </Box>
        </Box>
        <Box sx={{ mt: { xs: 2.5, lg: 0 } }}>
          <EmployeeSlider data={EMPLOYEE_SLIDER_DATA} />
        </Box>
      </Box>
    </>
  );
};

export default EmployeeBanner;
