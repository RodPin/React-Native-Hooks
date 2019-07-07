import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

//    HOW THE CALCULATOR WORKS:
//      - We add all the operations and numbers to the same string
//      - operate() function to calculate the result (it basically does the opposite of .toString())

const Calculator = () => {
  //useState('') -> '' is the initial "state" of the variable "operation"
  //the second argument of useState, "setOperation" is the function that make changes on the variable declared before
  const [operation, setOperation] = useState("");

  const CalcButton = ({ label, onPress }) => (
    <TouchableOpacity
      //if onPress is not defined we just compute the number or the operation
      onPress={onPress ? onPress : () => setOperation(operation + label)}
    >
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
        <CalcButton label="C" onPress={() => setOperation("")} />
        <CalcButton
          label="←"
          onPress={() => setOperation(backspace(operation))}
        />
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
        <CalcButton
          label="="
          onPress={() => setOperation(operate(operation))}
        />
      </View>
    </View>
  );
};

const Board = ({ label }) => (
  <View style={styles.board}>
    <Text style={styles.text}>{label}</Text>
  </View>
);

function operate(operation) {
  const answer = (+eval(operation)).toFixed(2);
  return answer;
}
function backspace(operation) {
  if (operation) {
    if (operation.length > 0) {
      // remove last char
      return operation.substring(0, operation.length - 1);
    }
  }
}

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
    width: 200,
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
