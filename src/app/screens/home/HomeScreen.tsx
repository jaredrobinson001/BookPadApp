/* eslint-disable no-nested-ternary */
/* eslint-disable react/react-in-jsx-scope */
import { BlankSpacer, BPText } from "@app/components";
import { appStyle, COLORS, FONT_SIZE, SPACE } from "@app/styles";
import { ICONS, strings } from "@core";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { Avatar, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useViewModel } from "./HomeScreen.ViewModel";
import { MyTabBar } from "./items";
import type { HomeScreenProps } from "./types";

const Tab = createMaterialTopTabNavigator();

export const HomeScreen = (props: HomeScreenProps) => {
  const { selectors } = useViewModel({});
  const { USER_INFO, BOOKS } = selectors;

  const renderUserAndSearchBar = () => {
    return (
      <View
        style={[
          appStyle.rowFullWidthSpaceBetweenContainer,
          // { backgroundColor: "red" },
        ]}
      >
        <View style={[appStyle.rowLeftContainer]}>
          <Avatar.Image
            source={{ uri: USER_INFO.ProfilePicUrl }}
            size={SPACE.spacing40}
            style={{ backgroundColor: COLORS.white }}
          />
          <BlankSpacer width={SPACE.spacing12} />
          <BPText
            fontSize={FONT_SIZE.fontSize14}
            fontWeight="600"
          >{`${strings.hello}, ${USER_INFO.NickName}`}</BPText>
        </View>
        <IconButton
          icon={{ uri: ICONS.search }}
          size={SPACE.spacing24}
          iconColor={COLORS.black}
          style={{ margin: 0 }}
          onPress={() => {
            console.log("search");
          }}
        />
      </View>
    );
  };
  const Item = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: COLORS.white,
        }}
      >
        {renderUserAndSearchBar()}
      </ScrollView>
    );
  };
  return (
    <SafeAreaView style={[appStyle.container, {}]}>
      {renderUserAndSearchBar()}
      <BlankSpacer height={SPACE.spacing16} />
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          swipeEnabled: true,
        }}
        initialLayout={{
          width: Dimensions.get("window").width,
        }}
        tabBar={(tabBarProps) => <MyTabBar {...tabBarProps} />}
      >
        <Tab.Screen name="Home" component={Item} />
        <Tab.Screen name="Settings" component={Item} />
        <Tab.Screen name="aaaaa" component={Item} />
        <Tab.Screen name="sssssddddddddd" component={Item} />
        <Tab.Screen name="dddddasdasdasdasd" component={Item} />
        <Tab.Screen name="fffffasdasdasdasd" component={Item} />
        <Tab.Screen name="ggggasdasdasd" component={Item} />
        <Tab.Screen name="jjjjjjjasdasdasdsd" component={Item} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
