import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#CBEDD5",
    flexDirection: "column",
    color: "white",
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
  },
});
