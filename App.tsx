import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Loyalty Card App by Code.Sydney</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F3F55",
    alignItems: "center",
    justifyContent: "center"
  }
});
