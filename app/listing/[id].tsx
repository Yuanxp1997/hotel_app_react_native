import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const Listing = () => {
  const { id } = useLocalSearchParams();

  return (
    <Stack.Screen
      options={{
        headerTitle: `Listing ${id}`,
      }}
    />
  );
};

export default Listing;

const styles = StyleSheet.create({});
