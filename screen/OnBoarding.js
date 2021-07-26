import React, { useEffect, useRef, useState } from "react";
import { Image, View, StyleSheet, FlatList, Text, Dimensions, TouchableOpacity } from "react-native";
import obData from "../data/OnboardingData";
import OnBoardingItem from "../component/OnBoardingItem";
import OnboardBottom from "../component/OnboardBottom";

const OnBoarding = () => {

  const onboard = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    onboard.current.scrollToIndex({ animated: true, index: currentPage });
  }, [currentPage]);

  useEffect(() => {

  }, [onboard.current]);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    currentPage > 0 ? setCurrentPage(currentPage - 1) : currentPage;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={obData}
        ref={onboard}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => <OnBoardingItem item={item} prev={handlePrev} current={currentPage} />}
        initialScrollIndex={currentPage}
      />
      <OnboardBottom currentPage={currentPage} handleNext={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default OnBoarding;
