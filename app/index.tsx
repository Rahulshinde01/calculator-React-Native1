import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  const [calculation, setCalculation] = useState("");
  const [firstValue, setFirstValue] = useState("");
  const [operator, setOperator] = useState<string>("");
  const [displayValue, setDisplayValue] = useState("0");
  

  const handleDelete = () => {
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue("0");
    }
  };

  const handleNumberInput = (value: string | number) => {
    if (value === "." && displayValue.includes(".")) {
      return;
    }

    if (displayValue === "0" && value !== ".") {
      setDisplayValue(value.toString());
    } else {
      setDisplayValue(displayValue + value.toString());
    }
  };

  const handleOperatorInput = (operator: string) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setCalculation(`${displayValue} ${operator}`);
    setDisplayValue("0");
  };


  const handleEqualtoOperation = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    let result = "0";

    if (operator === "+") {
      result = (num1 + num2).toString();
    } else if (operator === "-") {
      result = (num1 - num2).toString();
    } else if (operator === "*") {
      result = (num1 * num2).toString();
    } else if (operator === "/") {
      result = (num1 / num2).toString();
    }

    setCalculation(`${firstValue} ${operator} ${displayValue} =`);
    setDisplayValue(result);
    setOperator("");
    setFirstValue("");
  };

  const handleClear = () => {
    setDisplayValue("0");
    setOperator("");
    setFirstValue("");
    setCalculation("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.calculationText}>{calculation}</Text>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.utilityButton, styles.acButton]}
            onPress={handleClear}
          >
            <Text style={[styles.buttonText, styles.utilityButtonText]}>
              AC
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput("/")}
          >
            <Text style={[styles.buttonText, styles.operatorButtonText]}>
              ÷
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(7)}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(8)}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(9)}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput("*")}
          >
            <Text style={[styles.buttonText, styles.operatorButtonText]}>
              ×
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(4)}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(5)}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(6)}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput("-")}
          >
            <Text style={[styles.buttonText, styles.operatorButtonText]}>
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(1)}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(2)}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(3)}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput("+")}
          >
            <Text style={[styles.buttonText, styles.operatorButtonText]}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(0)}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(".")}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text style={styles.deleteButtonText}>⌫</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.equalButton} onPress={handleEqualtoOperation}>
            <Text style={styles.equalButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.clearButtonText}>Cal by Rahul</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  displayContainer: {
    flex: 2,
    width: "90%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  displayText: {
    fontSize: 48,
    color: "#333",
    textAlign: "right",
  },
  calculationText: {
    fontSize: 24,
    color: "#666",
    marginBottom: 10,
    textAlign: "right",
  },
  buttonContainer: {
    flex: 3,
    width: "90%",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 2,
    padding: 15,
  },
  buttonText: {
    fontSize: 34,
    color: "#333",
  },

  utilityButton: {
    backgroundColor: "#f0f0f0",
  },
  acButton: {
    backgroundColor: "#E0E7EA",
    flex: 4,
  },

  utilityButtonText: {
    fontSize: 24,
    color: "#333",
  },
  zeroButton: {
    flex: 2,
    paddingLeft: 35,
    paddingRight: 35,
  },
  zeroButtonText: {
    marginLeft: 10,
  },
  operatorButton: {
    backgroundColor: "#E0E7EA",
  },
  operatorButtonText: {
    color: "#A68965",
  },
  equalButton: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00FF00",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 2,
    padding: 15,
  },
  equalButtonText: {
    fontSize: 32,
    color: "#A68965",
  },
  clearButton: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    marginTop: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 10,
  },
  clearButtonText: {
    fontSize: 24,
    color: "#333",
  },

  deleteButtonText: {
    fontSize: 24,
    color: "#333",
  },
});
