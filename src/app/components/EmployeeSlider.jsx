import { Box } from "@mui/material";
import { duplicateSlides } from "@/utils";
import Image from "next/image";

const EmployeeSlider = ({ data }) => {
  const { slides, styles } = data || {};
  const { swiperSlideStyle, videoStyle } = styles || {};

  const duplicatedSlides = [
    ...slides,
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
  ];

  return (
    <Box id="short-slider" className="sliderContainer">
      <Box className="sliderTrack">
        {duplicatedSlides?.map((slide, index) => (
          <Box key={index} className="slide" style={swiperSlideStyle}>
            <Image
              alt=""
              width={100}
              height={100}
              style={videoStyle}
              src={slide?.thumbnailUrl}
              priority
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EmployeeSlider;
