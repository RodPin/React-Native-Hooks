import React from "react";
import { View } from "react-native";
import Counter from "./src/components/counter";
import Calculator from "./src/components/calculator";

const App = () => (
  <View style={{ flex: 1, justifyContent: "space-between" }}>
    <Counter />
    <Calculator />
  </View>
);

export default App;
