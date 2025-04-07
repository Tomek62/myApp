import React from "react";
import Svg, { Circle, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur } from "react-native-svg";
import { ViewStyle } from "react-native";

const BlurBackground = ({ style }: { style?: ViewStyle }) => {
  return (
    <Svg
      width={432}
      height={625}
      viewBox="0 0 432 625"
      fill="none"
      style={[{ position: "absolute" }, style]} // Fusionne les styles par défaut et ceux passés en props
    >
      <Defs>
        <Filter
          id="filter0_f_38_140"
          x="-95.126"
          y="0.874"
          width="762.001"
          height="762.001"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"

        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <FeGaussianBlur stdDeviation={131} result="effect1_foregroundBlur_38_140" />
        </Filter>
      </Defs>
      <Circle
        cx="285.875"
        cy="381.875"
        r="119"
        fill="#FFCF82"
        transform="rotate(-1.401 285.875 381.875)"
        filter="url(#filter0_f_38_140)"
      />
    </Svg>
  );
};

export default BlurBackground;
