import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const profile = () => {
  const { signOut, isSignedIn } = useAuth();
  return (
    <View>
      {isSignedIn && <Button title="Sign Out" onPress={() => signOut()} />}
      {!isSignedIn && (
        <Link href="/(modals)/login">
          <Text>Sign In</Text>
        </Link>
      )}
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
