import { ComponentType, FC } from "react";
import { View, ViewProps } from "react-native";

type StackProps = ViewProps & {
  alignCenter?: boolean;
  alignEnd?: boolean;
  justifiedBetween?: boolean;
  justifiedCenter?: boolean;
  justifiedEnd?: boolean;
  stretched?: boolean;
  fullWidth?: boolean;
  reversed?: boolean;
};

const withStackHOC = (Component: ComponentType<StackProps>) => {
  const StackHOC: FC<StackProps> = ({
    children,
    style,
    alignCenter,
    alignEnd,
    justifiedBetween,
    justifiedCenter,
    justifiedEnd,
    stretched,
    fullWidth,
    ...props
  }) => {
    return (
      <Component
        style={[
          {
            ...((alignCenter || alignEnd) && {
              alignItems: alignCenter
                ? "center"
                : alignEnd
                ? "flex-end"
                : "flex-start",
            }),
            ...((justifiedCenter || justifiedBetween || justifiedEnd) && {
              justifyContent: justifiedCenter
                ? "center"
                : justifiedBetween
                ? "space-between"
                : justifiedEnd
                ? "flex-end"
                : "flex-start",
            }),
            ...(stretched && { flex: 1 }),
            ...(fullWidth && { width: "100%" }),
          },
          style,
        ]}
        {...props}
      >
        {children}
      </Component>
    );
  };
  return StackHOC;
};

export const Row: FC<StackProps> = withStackHOC((props) => {
  const { children, style, reversed, ...rest } = props;
  return (
    <View
      style={[{ flexDirection: reversed ? "row-reverse" : "row" }, style]}
      {...rest}
    >
      {children}
    </View>
  );
});

export const Column: FC<StackProps> = withStackHOC((props) => {
  const { children, style, reversed, ...rest } = props;
  return (
    <View
      style={[{ flexDirection: reversed ? "column-reverse" : "column" }, style]}
      {...rest}
    >
      {children}
    </View>
  );
});
