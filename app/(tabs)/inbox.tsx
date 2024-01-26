import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const inbox = () => {
  return (
    <View>
      <Link href="/(modals)/booking">Booking</Link>
      <Link href="/(modals)/login">Login</Link>
      <Link href="/listing/123">Listing</Link>
    </View>
  );
};

export default inbox;

const styles = StyleSheet.create({});
