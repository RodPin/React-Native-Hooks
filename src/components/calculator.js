import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

const Calculator = () => {
  const [operation, setOperation] = useState(``);
  //useState(x) -> "x" is the initial "state" of the variable "count"
  //the second argument of useState, "setCount" is the function that will make changes on the variable declared before

  const CalcButton = ({ label, onPress }) => (
    <TouchableOpacity>
      <View style={styles.buttonView}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 27 }}>Calculator:</Text>
      <Board label={operation} />
      <View style={styles.row}>
        <CalcButton label="CE" onPress={() => setOperation("")} />
        <CalcButton label="C" />
        <CalcButton label="*" />
        <CalcButton label="/" />
      </View>
      <View style={styles.row}>
        <CalcButton label="1" />
        <CalcButton label="2" />
        <CalcButton label="3" />
        <CalcButton label="+" />
      </View>
      <View style={styles.row}>
        <CalcButton label="4" />
        <CalcButton label="5" />
        <CalcButton label="6" />
        <CalcButton label="-" />
      </View>
      <View style={styles.row}>
        <CalcButton label="7" />
        <CalcButton label="8" />
        <CalcButton label="9" />
        <CalcButton label="0" />
      </View>

      <View style={{ ...styles.row, marginTop: 10 }}>
        <CalcButton label="=" />
      </View>
    </View>
  );
};

const Board = ({ label }) => (
  <View style={styles.board}>
    <Text style={styles.text}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 27
  },
  buttonView: {
    height: 50,
    width: 50,
    borderWidth: 0.8,
    borderRadius: 5,
    alignItems: "center",
    borderColor: "#ccc",
    justifyContent: "center"
  },
  board: {
    height: 50,
    width: 250,
    alignItems: "center",
    borderColor: "#ccc",
    justifyContent: "center",
    borderWidth: 0.8,
    marginBottom: 10
  },
  row: {
    flexDirection: "row"
  }
});

export default Calculator;
