/* eslint-disable react-native/no-inline-styles */
import { BlankSpacer, Category, Loading } from "@app/components";
import { appStyle, SPACE } from "@app/styles";
import { useGlobalNavigation } from "@core";
import { size } from "lodash";
import React from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import { useViewModel } from "./CategoryTab.ViewModel";
import { styles } from "./style";

export const CategoryTab = (props: any) => {
  const { navigateToBookDetailScreen } = useGlobalNavigation();
  const { width } = useWindowDimensions();

  const { selectors } = useViewModel();
  const { categoryList } = selectors;
  const loadingComponent = () => {
    return (
      <>
        <BlankSpacer height={SPACE.spacing12} />
        <Loading isLoading />
      </>
    );
  };

  return (
    <View style={[styles.scrollViewContentContainer]}>
      <View style={[appStyle.rowFullWidthLeftContainer]}>
        {size(categoryList) > 0 ? (
          <>
            <FlatList
              data={categoryList}
              keyExtractor={(item, index) => `${item.CategoryId} + ${index}`}
              renderItem={({ item }) => <Category data={item} />}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => <BlankSpacer height={100} />}
              numColumns={2}
              contentContainerStyle={{
                width: width - 32,
              }}
            />
            {/* <BlankSpacer height={100} /> */}
          </>
        ) : (
          loadingComponent()
        )}
      </View>
      {/* <BlankSpacer height={100} /> */}
    </View>
  );
};
