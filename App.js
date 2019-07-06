/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Button title="-" onPress={() => setCount(count - 1)} color="red" />
        <Text style={{ fontSize: 27 }}> {count} </Text>
        <Button title="+" onPress={() => setCount(count + 1)} color="green" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
