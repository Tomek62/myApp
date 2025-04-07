import React from "react";
import Svg, { Circle, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur } from "react-native-svg";

const GlowingCircle = () => {
  return (
    <Svg width={109} height={109} viewBox="0 0 109 109" fill="none">
      <Defs>
        <Filter
          id="filter0_f_35_146"
          x="0.1"
          y="0.1"
          width="120"
          height="120"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <FeGaussianBlur stdDeviation="9.45" result="effect1_foregroundBlur_35_146" />
        </Filter>
      </Defs>
      <Circle cx="54.5" cy="54.5" r="40.5" fill="#FFCF82" filter="url(#filter0_f_35_146)" />
    </Svg>
  );
};

export default GlowingCircle;
