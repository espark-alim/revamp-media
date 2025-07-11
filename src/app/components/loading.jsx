"use client";
import { Box } from "@mui/material";
import { useState, useEffect, Suspense } from "react";
import { keyframes } from "@emotion/react";
import { LOADING_DATA } from "@/constant/new-home";

const dotAnimation = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(0); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(8px); }
  80% { transform: translateX(4px); }
  100% { transform: translateX(0); }
`;

const rocketAnimation = keyframes` 
  0% { transform: translateY(0); }
  100% { transform: translateY(-900px); }
`;

const smokeAnimation = keyframes` 
  0% { transform: translateY(0) scale(0.5);  opacity: 0.8; }
  50% { transform: translateY(-2px) scale(0.8); opacity: 0.5; }
  100% { transform: translateY(20px) scale(2); opacity: 0; }`;

function useDelayedRender(delay) {
  const [isDelayed, setIsDelayed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isDelayed;
}

const Loading = ({ children }) => {
  const isDelayed = useDelayedRender(1000);
  const {
    loadingFallBackBoxStyle,
    dotAnimationStyle,
    dots,
    rocketBoxStyle,
    logoBoxStyle,
    rocketImage,
    rocketImageStyle,
    titleImage,
    smokes,
    smokeAnimationStyle,
  } = LOADING_DATA || {};

  const Rocket = () => (
    <Box sx={rocketBoxStyle}>
      <Box sx={logoBoxStyle}>
        <Box
          component={"img"}
          src={rocketImage || "/"}
          sx={rocketImageStyle(rocketAnimation)}
          className="rocket"
        ></Box>
        <Box component={"img"} src={titleImage}></Box>
      </Box>
      {smokes?.map((_, index) => (
        <Box key={index} sx={smokeAnimationStyle(smokeAnimation, index)} />
      ))}
    </Box>
  );

  const LoadingFallback = () => (
    <Box sx={loadingFallBackBoxStyle}>
      {Rocket()}
      <Box sx={dotAnimationStyle(dotAnimation)}>
        {dots?.map((_, index) => (
          <Box key={index} component="div"></Box>
        ))}
      </Box>
    </Box>
  );

  if (isDelayed) {
    return <LoadingFallback />;
  }

  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>;
};

export default Loading;
