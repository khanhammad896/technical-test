import { Colors } from "@/constants/Colors";
import { getFontSize } from "@/utils/helper";
import React, { type FC } from "react";
import { Text, type TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  size?: number;
  color?: string;
  aligned?: "center" | "left" | "right";
  spacing?: number;
  height?: number;
}

const withTextHOC = (Component: React.ComponentType<CustomTextProps>) => {
  const TextHOC: FC<CustomTextProps> = ({
    children,
    size = 16,
    color,
    style,
    aligned,
    spacing,
    height,
    ...props
  }) => {
    return (
      <Component
        style={[
          {
            fontSize: getFontSize(size),
            color: color ?? Colors.light.white,
            ...(aligned !== undefined && { textAlign: aligned }),
            ...(spacing !== undefined && { letterSpacing: spacing }),
            ...(height !== undefined && { lineHeight: height }),
          },
          style,
        ]}
        {...props}
      >
        {children}
      </Component>
    );
  };
  return TextHOC;
};

export const Bold: FC<CustomTextProps> = withTextHOC(
  ({ children, style, ...props }) => {
    return (
      <Text style={[{ fontWeight: "700" }, style]} {...props}>
        {children}
      </Text>
    );
  }
);

export const Medium: FC<CustomTextProps> = withTextHOC(
  ({ children, style, ...props }) => {
    return (
      <Text style={[{ fontWeight: "500" }, style]} {...props}>
        {children}
      </Text>
    );
  }
);

export const Regular: FC<CustomTextProps> = withTextHOC(
  ({ children, style, ...props }) => {
    return (
      <Text style={[{ fontWeight: "400" }, style]} {...props}>
        {children}
      </Text>
    );
  }
);

export const Light: FC<CustomTextProps> = withTextHOC(
  ({ children, style, ...props }) => {
    return (
      <Text style={[{ fontWeight: "300" }, style]} {...props}>
        {children}
      </Text>
    );
  }
);
