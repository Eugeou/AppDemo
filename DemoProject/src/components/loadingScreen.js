import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [bmiResult, setBMIResult] = useState('');

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    const bmiResultText = getBMIResultText(bmiValue);

    setBMI(bmiValue.toFixed(2));
    setBMIResult(bmiResultText);
  };

  const Validate = (height, weight) =>{
    if(height===0 || weight===0)
    {
      return 0;
    }
    return 1;
  }

  const getBMIResultText = (bmiValue) => {
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        onChangeText={(text) => setHeight(text)}
        value={height}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        onChangeText={(text) => setWeight(text)}
        value={weight}
        keyboardType="numeric"
      />
      <Text style={styles.output}>BMI: {bmi}</Text>
      <Text style={styles.resultText}>Result: {bmiResult}</Text>
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ff6666',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  output: {
    textAlign: 'center',
    fontSize: 20,
  },
  resultText: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 20,
    color: 'blue',
  },
});

export default BMICalculator;
