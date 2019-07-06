import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Counter = () => {
  //useState(x) -> "x" is the initial "state" of the variable "count"
  //the second argument of useState, "setCount" is the function that will make changes on the variable declared before
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

export default Counter;
