/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { View } from "react-native";

export const BlankSpacer = (props: {
  width?: number;
  height?: number;
  color?: string;
}): JSX.Element => {
  const colorProps =
    props.color !== undefined ? { backGroundColor: props.color } : {};
  return (
    <View
      style={{
        width: props?.width ?? 0,
        height: props?.height ?? 0,
        ...colorProps,
      }}
    />
  );
};
