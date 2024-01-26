import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { defaultStyles } from "@/constants/Styles";

const Login = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={[defaultStyles.inputField, styles.input]}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TouchableOpacity
        style={defaultStyles.btn}
        onPress={() => console.log("login")}
      >
        <Text style={defaultStyles.btnText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.separatorOr}>or</Text>
        <View style={styles.separator} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: { marginBottom: 20 },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#a0a0a0",
  },
  separatorOr: {
    color: "#666",
    marginHorizontal: 8,
  },
});
