/* eslint-disable react-native/no-inline-styles */
import { View } from "react-native";
import React from "react";
import { categoryColors } from "@core";
import { COLORS, FONT_SIZE, SPACE } from "@app/styles";
import { BPText } from "../BPText";

type CategoryTagProps = {
  category: string;
};

export const CategoryTag = ({ category }: CategoryTagProps) => {
  const defaultBackgroundColor = "#000000";
  const defaultTextColor = "#ffffff";
  const isCategoryValid = Object.keys(categoryColors).includes(category);
  const color = isCategoryValid
    ? categoryColors[category]
    : defaultBackgroundColor;
  // const textColor = getTextColor(color);
  const textColor = color;

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 50,
        marginHorizontal: 4,
        borderColor: color,
        borderWidth: 2,
        marginBottom: SPACE.spacing8,
      }}
    >
      <BPText
        fontSize={FONT_SIZE.fontSize12}
        style={{ color: textColor }}
        fontWeight="500"
      >
        {category}
      </BPText>
    </View>
  );
};
